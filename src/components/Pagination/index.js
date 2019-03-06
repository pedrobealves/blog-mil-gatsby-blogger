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

    const { numPages, currentPage, slug } = this.props.context
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const isNotPaginated = isFirst & isLast

    const prevPageNum = currentPage - 1 === 1 ? `` : currentPage - 1
    const nextPageNum = currentPage + 1

    const pathPrefix = typeof slug === 'string' ? `/tag/${slug}` : ''
    const prevPageLink = isFirst ? null : `${pathPrefix}/${prevPageNum}/`
    const nextPageLink = isLast ? null : `${pathPrefix}/${nextPageNum}/`

    const pagesWithDots = pagination(currentPage, numPages)

    return (
      <nav className="post-pagination" aria-label="Blog navigation">
        <ul className="pagination justify-content-center">
          {!isFirst && (
            <li className="page-item">
              <Link className={'page-link'} to={prevPageLink}>
                {'<'}
              </Link>
            </li>
          )}
          {pagesWithDots.map(index => (
            <li
              key={index}
              className={`page-item ${currentPage === index && `active`}`}
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
