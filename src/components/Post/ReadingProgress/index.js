import React, { useEffect, useState } from 'react'
import { ProgressBar } from './styles.js'

const ReadingProgress = ({ target, slug }) => {
  const [readingProgress, setReadingProgress] = useState(0)
  const [lastArticle, setLastArticle] = useState()
  const [scroll, setScroll] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLastArticle(localStorage.getItem('lastArticle'))
      setScroll(localStorage.getItem('scroll'))
    }

    lastArticle === slug && window.scrollTo({ top: scroll, behavior: 'smooth' })
  }, [lastArticle, scroll])

  const scrollListener = () => {
    if (!target.current) {
      return
    }

    const element = target.current
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    const value = Math.trunc((windowScrollTop / totalHeight) * 100)

    if (windowScrollTop === 0) {
      return setReadingProgress(0)
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100)
    }

    if (value !== readingProgress) updateValue(value, windowScrollTop)
  }

  const updateValue = (value, windowScrollTop) => {
    if (windowScrollTop > 2000) {
      localStorage.setItem('lastArticle', slug)
      localStorage.setItem('scroll', windowScrollTop)
    }

    setReadingProgress(value)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  })

  return <ProgressBar style={{ width: `${readingProgress}%` }} />
}

export default ReadingProgress
