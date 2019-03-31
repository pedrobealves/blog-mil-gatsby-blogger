import React from 'react'

const Success = ({ title, text, success }) => {
  return (
    <div className="alert alert-success">
      {title && (
        <strong>
          {title}
          {success && <span className="text-success">{success}</span>}
        </strong>
      )}
      {text}
    </div>
  )
}

export default Success
