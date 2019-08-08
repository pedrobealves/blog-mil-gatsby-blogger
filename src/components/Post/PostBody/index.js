import React, { useEffect } from 'react'
import PostCategory from './PostCategory'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import Modal from './Modal'
import useModal from './useModal'

const PostBody = ({ body, content, labels }) => {
  const { frontmatter, html } = body

  const { isShowing, toggle } = useModal()

  const lastArticle = localStorage.getItem('lastArticle')
  const scroll = localStorage.getItem('scroll')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onscroll = function() {
        localStorage.setItem('lastArticle', frontmatter.slug)
        localStorage.setItem('scroll', window.scrollY)
      }
    }
    lastArticle === frontmatter.slug && toggle()
  }, [])

  return (
    <div className="card__content">
      <Modal isShowing={isShowing} hide={toggle} scroll={scroll} />
      {labels && <PostCategory label={labels[0]} />}
      <PostHeader header={frontmatter} />
      <PostContent content={content} />
      {labels && <PostFooter labels={labels} />}
    </div>
  )
}

export default PostBody
