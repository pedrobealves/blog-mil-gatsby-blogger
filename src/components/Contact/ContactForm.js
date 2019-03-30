import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FacebookMessage from './Facebook'

const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.base};
    border-radius: 2px;
    padding: 1em;
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
    &:required {
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Name = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Email = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Message = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 250px;
  resize: vertical;
`

const Submit = styled.input`
  background: ${props => props.theme.colors.base} !important;
  color: white !important;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${props => props.theme.colors.highlight} !important;
  }
`

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const Button = styled.div`
  background: ${props => props.theme.colors.base};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      subject: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div className="card">
        <header className="card__header">
          <h4>Contato</h4>
        </header>
        <div className="card__content">
          <div className="row">
            <div className="col-lg-4">
              <h5>Questões? Nos envie uma mensagem!</h5>
              <p>Recomendações de jogos, artigos ou até reclamações</p>
              <div className="spacer-sm" />
              <h5>Ou nos envie uma mensagem por Facebook</h5>
              <p>
                <FacebookMessage />
              </p>
            </div>
            <div className="col-lg-8">
              <form
                name="contact"
                onSubmit={this.handleSubmit}
                data-netlify="true"
                data-netlify-honeypot="bot"
                overlay={this.state.showModal}
                onClick={this.closeModal}
              >
                <div className="row">
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot" onChange={this.handleInputChange} />
                    </label>
                  </p>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="contact-form-name">
                        Seu Nome <span className="required">*</span>
                      </label>{' '}
                      <input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="contact-form-email">
                        Seu Email <span className="required">*</span>
                      </label>{' '}
                      <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="contact-form-subject">Assunto</label>{' '}
                      <input
                        name="subject"
                        type="text"
                        placeholder="Message"
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                        required
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-form-message">
                    Sua Mensagem <span className="required">*</span>
                  </label>{' '}
                  <textarea
                    rows="5"
                    className="form-control"
                    name="message"
                    type="text"
                    placeholder="Message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="form-group form-group--submit">
                  <button
                    type="submit"
                    className="btn btn-primary-inverse btn-lg btn-block"
                  >
                    Enviar Sua Mensagem
                  </button>
                </div>
                <Modal visible={this.state.showModal}>
                  <p>
                    Obrigado por entrar em contato. Eu entrarei em contato com
                    você assim que possível.
                  </p>
                  <Button onClick={this.closeModal}>Okay</Button>
                </Modal>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
