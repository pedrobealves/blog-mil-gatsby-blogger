import React from 'react'
import { Link } from 'gatsby'

class Pagination extends React.Component {
  render() {
    const pagination = (current, last) => {
      const delta = 2
      const left = current - delta
      const right = current + delta + 1

      let range = []
      let rangeWithDots = []
      let l

      for (let i = 1; i <= last; i++) {
        if (i === 1 || i === last || (i >= left && i < right)) {
          range.push(i)
        }
      }
      for (let j of range) {
        if (l) {
          if (j - l !== 1) {
            rangeWithDots.push('...')
          }
        }
        rangeWithDots.push(j)
        l = j
      }

      return rangeWithDots
    }

    const { numberOfPages, humanPageNumber, basePath } = this.props.context
    const isFirst = humanPageNumber === 1
    const isLast = humanPageNumber === numberOfPages
    const isNotPaginated = isFirst & isLast

    const prevPageNum = humanPageNumber - 1 === 1 ? `` : humanPageNumber - 1
    const nextPageNum = humanPageNumber + 1

    const pathPrefix = typeof basePath === 'string' ? `/${basePath}` : ''
    const prevPageLink = isFirst ? null : `${pathPrefix}${prevPageNum}`
    const nextPageLink = isLast ? null : `${pathPrefix}${nextPageNum}`

    const pagesWithDots = pagination(humanPageNumber, numberOfPages)

    return (
      <nav className="post-pagination" aria-label="Blog navigation">
        <ul className="pagination pagination--lg justify-content-center">
          {!isFirst && (
            <li className="page-item">
              <Link className={'page-link'} to={prevPageLink}>
                {'<'}
              </Link>
            </li>
          )}
          {pagesWithDots.map((index) => (
            <li
              key={index}
              className={`page-item ${humanPageNumber === index && `active`}`}
            >
              {index === '...' ? (
                <li className="page-item">
                  <span className="page-link">...</span>
                </li>
              ) : (
                <Link
                  className={'page-link'}
                  to={`/${index === 1 ? '' : index}`}
                  aria-label={`Goto page ${index}`}
                >
                  {index}
                </Link>
              )}
            </li>
          ))}
          {!isLast && (
            <li className="page-item">
              <Link className={'page-link'} to={nextPageLink}>
                {'>'}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    )
  }
}

export default Pagination
