const fetch = require(`node-fetch`)

module.exports = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch(
    `http://bgmil.blogspot.com/feeds/posts/summary?alt=json&max-results=0`
  )

  const resultData = await result.json()

  const label = resultData.feed.category
  let lst = []

  label.forEach(element => lst.push(element.term))

  createNode({
    terms: lst,
    // required fields
    id: resultData.feed.id.$t,
    parent: null,
    children: [],
    internal: {
      type: `Label`,
      contentDigest: createContentDigest(resultData),
    },
  })
}