import React from 'react'
import Label from './Label'
import { orderBy } from 'lodash'

const SortLabels = ({ labels }) => {
  const labelsSorted = orderBy(
    labels.allBloggerPost.group,
    // eslint-disable-next-line
    [(object) => object.totalCount],
    ['desc']
  )

  return (
    <>
      {labelsSorted.slice(0, 20).map(({ fieldValue }) => (
        <Label key={fieldValue} text={fieldValue} />
      ))}
    </>
  )
}

export default SortLabels
