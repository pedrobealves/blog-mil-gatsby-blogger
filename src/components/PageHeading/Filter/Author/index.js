import React, { useState, createRef } from 'react'
import handleClick from '../../../Listeners/handleClick'
import Author from './Author'

const Category = ({ searchValue, onClickValue }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const ref = createRef()

  handleClick(ref, setModalOpen)

  const text = searchValue.author || 'Todos Autores'

  return (
    <div
      className="post-filter__select"
      onClick={() => setModalOpen(!modalOpen)}
      ref={ref}
    >
      <label className="post-filter__label">Autor</label>{' '}
      <div
        className={`cs-select cs-skin-border + ${modalOpen && 'cs-active'}`}
        tabIndex="0"
      >
        <span className="cs-placeholder">{text}</span>
        <div className="cs-options">
          <Author onClickValue={onClickValue} />
        </div>
        <select className="cs-select cs-skin-border">
          <option value="all">{text}</option>
        </select>
      </div>
    </div>
  )
}
export default Category
