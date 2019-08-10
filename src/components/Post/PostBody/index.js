import React, { useEffect, useState } from 'react'
import PostCategory from './PostCategory'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import Modal from './Modal'
import useModal from './useModal'

const PostBody = ({ body: { frontmatter, html }, content, labels }) => {
  const { isShowing, toggle } = useModal()

  const [lastArticle, setLastArticle] = useState()
  const [scroll, setScroll] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLastArticle(localStorage.getItem('lastArticle'))
      setScroll(localStorage.getItem('scroll'))
    }

    lastArticle === frontmatter.slug && toggle()
  }, [lastArticle, scroll])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onscroll = function() {
        if (window.scrollY > 2000) {
          localStorage.setItem('lastArticle', frontmatter.slug)
          localStorage.setItem('scroll', window.scrollY)
        }
      }
    }
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
