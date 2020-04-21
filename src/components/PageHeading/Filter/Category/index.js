import React, { useState, createRef } from 'react'
import handleClick from '../../../Listeners/handleClick'
import Labels from './Labels'

const Category = ({searchValue, onClickValue}) => {
  const [modalOpen, setModalOpen] = useState(false)

  const ref = createRef()

  handleClick(ref, setModalOpen)

  const text = searchValue.category || 'Todos Artigos'

  return (
    <div
      className="post-filter__select"
      onClick={() => setModalOpen(!modalOpen)}
      ref={ref}
    >
      <label className="post-filter__label">Categoria</label>
      <div
        className={`cs-select cs-skin-border + ${modalOpen && 'cs-active'}`}
        tabIndex="0"
      >
        <span className="cs-placeholder">{text}</span>
        <div className="cs-options overflow-auto">
          <Labels onClickValue={onClickValue}/>
        </div>
        <select className="cs-select cs-skin-border">
          <option value="all">{text}</option>
        </select>
      </div>
    </div>
  )
}
export default Category
