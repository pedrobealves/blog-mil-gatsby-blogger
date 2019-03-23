import React, { Suspense, useState } from 'react'
const FacebookComment = React.lazy(() => import('./FacebookComment'))

const PostComments = ({ pagePath }) => {
  const [showComments, setShowComments] = useState(false)

  return (
    <div className="post-comments card card--lg">
      <header className="post-commments__header card__header">
        <h4>Comments (18)</h4>
      </header>
      <div className="post-comments__content card__content">
        {showComments ? (
          <Suspense
            fallback={
              <button
                type="button"
                className="btn btn-secondary btn-lg btn-block"
              >
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="sr-only">Carregando...</span>
              </button>
            }
          >
            <FacebookComment pagePath={pagePath} />
          </Suspense>
        ) : (
          <button
            onClick={() => setShowComments(true)}
            type="button"
            className="btn btn-secondary btn-lg btn-block"
          >
            Mostrar Comentários
          </button>
        )}
      </div>
    </div>
  )
}

export default PostComments
