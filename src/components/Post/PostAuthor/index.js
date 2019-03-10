import React from 'react'

const PostAuthor = () => {
  return (
    <div className="post-author card card--lg">
      <div className="card__content">
        <header className="post-author__header">
          <figure className="post-author__avatar">
            <img
              src="./Alchemists Basketball Club &amp; Sports News HTML Template - Post Page V1_files/avatar-1.jpg"
              alt="Post Author Avatar"
            />
          </figure>
          <div className="post-author__info">
            <h4 className="post-author__name">James Spiegel</h4>
            <span className="post-author__slogan">The Alchemists Ninja</span>
          </div>
          <ul className="post-author__social-links social-links social-links--btn">
            <li className="social-links__item">
              <a
                href="http://alchemists.dan-fisher.com/basketball/blog-post-1.html#"
                className="social-links__link social-links__link--fb"
              >
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li className="social-links__item">
              <a
                href="http://alchemists.dan-fisher.com/basketball/blog-post-1.html#"
                className="social-links__link social-links__link--twitter"
              >
                <i className="fa fa-twitter" />
              </a>
            </li>
          </ul>
        </header>
        <div className="post-author__description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur.
        </div>
      </div>
    </div>
  )
}

export default PostAuthor
