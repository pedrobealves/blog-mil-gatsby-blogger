import React from 'react'

const Error = ({ title, text }) => {
  return (
    <div class="alert alert-danger alert-dismissible">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
      <strong>{title}</strong>
      {text}
    </div>
  )
}

export default Error
