import React, { useState } from 'react'
import { Link } from 'gatsby'

const Menu = ({ header }) => {
  const itens = {
    list: [
      {
        id: 0,
        title: 'HOME',
        selected: true,
        link: '',
      },
      {
        id: 1,
        title: 'SOBRE',
        selected: false,
        link: 'sandman-o-tempo-e-morte-sob-perspectiva/',
        sub: [
          {
            id: 0,
            title: 'HOME',
            link: 'tengen-toppa-gurren-lagann-o-cliche-na/',
          },
        ],
      },
      {
        id: 2,
        title: 'JOGOS',
        selected: false,
        link: 'sandman-o-tempo-e-morte-sob-perspectiva/',
        sub: [],
      },
      {
        id: 3,
        title: 'ARQUIVO',
        selected: false,
        link: 'sandman-o-tempo-e-morte-sob-perspectiva/',
        sub: [],
      },
      {
        id: 4,
        title: 'GALERIA',
        selected: false,
        link: 'sandman-o-tempo-e-morte-sob-perspectiva/',
        sub: [],
      },
    ],
  }

  return (
    <React.Fragment>
      {itens.list.map(({ id, selected, title, link, sub }) => (
        <li
          key={id}
          className={
            header
              ? selected
                ? 'active has-children'
                : 'has-children'
              : 'footer-nav__item'
          }
        >
          {sub && header && <span className="main-nav__toggle" />}
          <Link to={`/${link}/`}>{title}</Link>
          {sub && header && (
            <ul className="main-nav__sub">
              {sub.map(({ id, title, link }) => (
                <li key={id} className="active">
                  <Link to={`/${link}/`}>{title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </React.Fragment>
  )
}

export default Menu
