import React from 'react'

const Modal = ({ isShowing, hide, scroll }) =>
  isShowing && (
    <div className="modal d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
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
          <div className="modal-body">Deseja retornar a leitura?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (typeof window !== 'undefined') window.scrollTo(0, scroll)
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
