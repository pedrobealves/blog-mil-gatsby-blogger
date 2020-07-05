import React from 'react'
import { Link } from 'gatsby'
import itens from '../../../../utils/menuItens'

const Menu = ({ header }) => {
  return (
    <>
      {itens.list.map(({ title, link, sub }, index) => (
        <li
          key={title}
          className={header ? sub && 'has-children' : 'footer-nav__item'}
        >
          {sub && header && <span className="main-nav__toggle" />}
          <Link to={`/${link}`} activeClassName="active">
            {title}
          </Link>
          {sub && header && (
            <ul className="main-nav__sub">
              {sub.map(({ title, link, selected }) => (
                <li key={title} className={selected && 'active'}>
                  <Link to={`/${link}`}>{title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  )
}

export default Menu
