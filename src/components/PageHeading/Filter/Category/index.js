import React, { useState, createRef } from 'react'
import handleClick from '../../../Listeners/handleClick'
import Labels from './Labels'

const Category = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const ref = createRef()

  handleClick(ref, setModalOpen)

  return (
    <div
      className="post-filter__select"
      onClick={() => setModalOpen(!modalOpen)}
      ref={ref}
    >
      <label className="post-filter__label">Category</label>
      <div
        className={`cs-select cs-skin-border + ${modalOpen && 'cs-active'}`}
        tabIndex="0"
      >
        <span className="cs-placeholder">Todos Artigos</span>
        <div className="cs-options">
          <Labels />
        </div>
        <select className="cs-select cs-skin-border">
          <option value="" disabled="disabled" selected="selected">
            Todos Artigos{' '}
          </option>
          <option value="all">Todos Artigos</option>
        </select>
      </div>
    </div>
  )
}
export default Category
