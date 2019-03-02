const crypto = require('crypto')
const { google } = require('googleapis')

exports.sourceNodes = async ({ actions, createNodeId }, configOptions) => {
  const { createNode } = actions
  const { clientEmail, privateKey, viewId, startDate } = configOptions
  const scopes = 'https://www.googleapis.com/auth/analytics.readonly'

  const typePrefix = 'analytics__'
  const refactoredEntityTypes = {
    post: `${typePrefix}POST`,
    page: `${typePrefix}PAGE`,
  }

  const jwt = new google.auth.JWT(clientEmail, null, privateKey, scopes)
  await jwt.authorize()
  const result = await google.analytics('v3').data.ga.get({
    auth: jwt,
    ids: 'ga:' + viewId,
    'start-date': startDate || '2009-01-01',
    'end-date': 'today',
    dimensions: 'ga:pagePath',
    metrics: 'ga:pageviews',
    sort: '-ga:pageviews',
    'max-results': '20',
  })

  result.data.rows.forEach(post => {
    const [path, totalCount] = post
    createNode({
      path,
      totalCount: Number(totalCount),
      id: createNodeId(path),
      internal: {
        type: refactoredEntityTypes.post,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(post))
          .digest(`hex`),
        mediaType: `text/plain`,
        description: `Page views per path`,
      },
    })
  })
}
