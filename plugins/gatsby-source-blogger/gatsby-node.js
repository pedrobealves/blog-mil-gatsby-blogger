'use strict'

const { google } = require('googleapis')

const unified = require('unified')

const parse = require('rehype-parse')

const rehype2remark = require('rehype-remark')

const stringify = require('remark-stringify')

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

const crypto = require('crypto')

const typePrefix = 'blogger__'
const refactoredEntityTypes = {
  post: `${typePrefix}POST`,
  page: `${typePrefix}PAGE`,
}

const handleResponse = str => {
  // const rex = /<img\ssrc=(?:(?:'([^']*)')|(?:"([^"]*)")|([^\s]*))/i
  // const res = str.match(re)
  // const src = res[1] || res[2] || res[3]
  const re = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g
  const results = re.exec(str)
  let img = ''
  if (results) img = results[1]
  return img
}

exports.sourceNodes = async (
  { actions, createNodeId, store, cache },
  { apiKey, blogId }
) => {
  const { createNode, setPluginStatus } = actions
  const blogger = google.blogger({
    version: 'v3',
    auth: apiKey,
  })
  let postResult

  try {
    postResult = await blogger.posts.list({
      blogId: blogId,
      maxResults: 500,
    })
  } catch (err) {
    console.log('Error fetching posts', err)
  }

  // const rePost = /^https?:\/\/(?:[^/]+)\/\d{4}\/\d{2}\/([^/][^.]+)\.html$/
  const rePost = /^https?:\/\/(?:[^/]+)(\/\d{4}\/\d{2}\/[^/][^.]+\.html)$/
  const posts = postResult.data.items

  if (posts) {
    posts.forEach(post => {
      createRemoteFileNode({
        url: handleResponse(post.content),
        store,
        cache,
        createNode,
        createNodeId,
      })
        .then(fileNode => {
          if (fileNode) {
            post.cover___NODE = fileNode.id
          }

          unified()
            .use(parse)
            .use(rehype2remark)
            .use(stringify)
            .process(post.content, function(err, md) {
              if (err) console.log(err)
              const segments = rePost.exec(post.url)
              const gatsbyPost = Object.assign(
                {
                  slug: segments[1],
                },
                post,
                {
                  id: createNodeId(post.id),
                  parent: null,
                  children: [],
                  internal: {
                    type: refactoredEntityTypes.post,
                    mediaType: `text/markdown`,
                    content: `---
title: '${post.title.replace("'", "''")}'
date: '${post.published}'
slug: '${segments[1]}'
labels: '${post.labels}'
type: '${refactoredEntityTypes.post}'
---

${md}`,
                    contentDigest: crypto
                      .createHash(`md5`)
                      .update(JSON.stringify(post))
                      .digest(`hex`),
                  },
                }
              )
              createNode(gatsbyPost)
            })
        })
        .catch(e => {
          console.error('[gatsby-transformer-image]', 'Error', e.message)
        })
    })
  }

  let pageResult

  try {
    pageResult = await blogger.pages.list({
      blogId: blogId,
      maxResults: 500,
    })
  } catch (err) {
    console.log('Error fetching pages', err)
  }

  const rePage = /^https?:\/\/(?:[^/]+)\/p\/([^/][^.]+)\.html$/
  const pages = pageResult.data.items

  if (pages) {
    pages.forEach(page => {
      unified()
        .use(parse)
        .use(rehype2remark)
        .use(stringify)
        .process(page.content, function(err, md) {
          if (err) console.log(err)
          const segments = rePage.exec(page.url)
          const gatsbyPage = Object.assign(
            {
              slug: '/' + segments[1],
            },
            page,
            {
              id: createNodeId(page.id),
              parent: null,
              children: [],
              internal: {
                type: refactoredEntityTypes.page,
                mediaType: `text/markdown`,
                content: `---
  title: '${page.title.replace("'", "''")}'
  date: '${page.published}'
  slug: '/${segments[1]}'
  labels: ''
  templateKey: 'page'
  `,
                contentDigest: crypto
                  .createHash(`md5`)
                  .update(JSON.stringify(page))
                  .digest(`hex`),
              },
            }
          )
          createNode(gatsbyPage)
        })
      setPluginStatus({
        status: {
          lastFetched: Date.now(),
        },
      })
    })
  }
}
