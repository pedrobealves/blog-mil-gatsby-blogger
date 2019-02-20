import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const cover = str => {
  const ele = document.createElement('div')
  ele.innerHTML = str
  const image = ele.querySelector('img')
  return image.src
}

const handleResponse = response => {
  var re = /(<img(?!.*?alt=(['"]).*?\2)[^>]*)(>)/
  var results = re.exec(response)
  console.log(results)
  var img = ''
  if (results) img = results[1]
  var str = img

  var fe = /\ssrc=(?:(?:'([^']*)')|(?:"([^"]*)")|([^\s]*))/i
  // match src='a' OR src="a" OR src=a

  var res = str.match(fe)

  var src = res[1] || res[2] || res[3]
  return src
}

const Card = ({ slug, title, published, childMarkdownRemark, ...props }) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <img src={handleResponse(childMarkdownRemark.html)} />
        <Title>{title}</Title>
        <Date>{published}</Date>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Post>
  )
}

export default Card
