import React from 'react'

const Modal = ({ isShowing, hide, scroll }) =>
  isShowing && (
    <div
      className="modal show d-block"
      id="modal-login-register"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal--login-simple" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="pt-3 px-4">
              <h4>Deseja retornar a leitura?</h4>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (typeof window !== 'undefined')
                  window.scrollTo({ top: scroll, behavior: 'smooth' })
                hide()
              }}
            >
              Sim
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={hide}
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  )

export default Modal
