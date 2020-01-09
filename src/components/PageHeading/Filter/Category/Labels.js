import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
const IndexPage = () => {
  // Build Time Data Fetching
  const gatsbyRepoData = useStaticQuery(graphql`
    {
      allLabel {
        edges {
          node {
            id
            terms
          }
        }
      }
    }
  `)

  const labels = gatsbyRepoData.allLabel.edges[0].node.terms

  const label = labels.slice(0, 10).map((name, index) => (
    <li key={index} data-option="" data-value={name}>
      <span>{name}</span>
    </li>
  ))

  return <ul>{label}</ul>
}
export default IndexPage
