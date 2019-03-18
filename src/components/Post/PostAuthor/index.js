import React from 'react'
import authorConfig from '../../../utils/author'
import { SocialButton } from '../../Common/Button'

const PostAuthor = ({ id, displayName, image }) => {
  const author = authorConfig[id]
  return (
    <div className="post-author card card--lg">
      <div className="card__content">
        <header className="post-author__header">
          <figure className="post-author__avatar">
            <img
              src={image.url.replace('s35', 's60')}
              alt="Post Author Avatar"
            />
          </figure>
          <div className="post-author__info">
            <h4 className="post-author__name">{displayName}</h4>
            {author.slog && (
              <span className="post-author__slogan">{author.slog}</span>
            )}
          </div>
          <ul className="post-author__social-links social-links social-links--btn">
            {author.social.map(({ url, title }, index) => (
              <SocialButton key={index} link socialUrl={url} type={title} />
            ))}
          </ul>
        </header>
        <div className="post-author__description">{author.bio}</div>
      </div>
    </div>
  )
}

export default PostAuthor
