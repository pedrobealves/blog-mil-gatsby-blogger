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
      },
      {
        id: 2,
        title: 'CONTATO',
        selected: false,
        link: 'contact/',
      },
      {
        id: 3,
        title: 'ARQUIVO',
        selected: false,
        link: 'archive/',
      },
      {
        id: 4,
        title: 'GALERIA',
        selected: false,
        link: 'sandman-o-tempo-e-morte-sob-perspectiva/',
        sub: [
          {
            id: 0,
            title: 'HOME',
            selected: false,
            link: 'tengen-toppa-gurren-lagann-o-cliche-na/',
          },
          {
            id: 1,
            title: 'HOME',
            selected: false,
            link: 'tengen-toppa-gurren-lagann-o-cliche-na/',
          },
          {
            id: 2,
            title: 'HOME',
            selected: false,
            link: 'tengen-toppa-gurren-lagann-o-cliche-na/',
          },
        ],
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
                ? `active ${sub && `has-children`}`
                : sub && 'has-children'
              : 'footer-nav__item'
          }
        >
          {sub && header && <span className="main-nav__toggle" />}
          <Link to={`/${link}/`}>{title}</Link>
          {sub && header && (
            <ul className="main-nav__sub">
              {sub.map(({ id, title, link, selected }) => (
                <li key={id} className={selected && 'active'}>
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
