import React, { useState } from 'react'
import { Link } from 'gatsby'

const Menu = ({ header }) => {
  const itens = {
    list: [
      {
        id: 0,
        title: 'HOME',
        link: '',
      },
      {
        id: 1,
        title: 'SOBRE',
        link: 'sandman-o-tempo-e-morte-sob-perspectiva/',
      },
      {
        id: 2,
        title: 'CONTATO',
        link: 'contact/',
      },
      {
        id: 3,
        title: 'ARQUIVO',
        link: 'archive/',
      },
      {
        id: 4,
        title: 'JOGOS',
        link: 'sandman-o-tempo-e-morte-sob-perspectiva/',
        sub: [
          {
            id: 0,
            title: 'RPG',
            link: 'tengen-toppa-gurren-lagann-o-cliche-na/',
          },
          {
            id: 1,
            title: 'TERROR',
            link: 'tengen-toppa-gurren-lagann-o-cliche-na/',
          },
          {
            id: 2,
            title: 'ACTION',
            link: 'tengen-toppa-gurren-lagann-o-cliche-na/',
          },
        ],
      },
    ],
  }

  return (
    <>
      {itens.list.map(({ id, selected, title, link, sub }) => (
        <li
          key={id}
          className={header ? sub && 'has-children' : 'footer-nav__item'}
        >
          {sub && header && <span className="main-nav__toggle" />}
          <Link to={`${link}`} activeClassName="active">
            {title}
          </Link>
          {sub && header && (
            <ul className="main-nav__sub">
              {sub.map(({ id, title, link, selected }) => (
                <li key={id} className={selected && 'active'}>
                  <Link to={`${link}`}>{title}</Link>
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
