import React from "react"
import axios from "axios"
import * as qs from "query-string"
import { globalHistory } from "@reach/router"
import contactStyles from "./contact.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.state = { feedbackMsg: null }
    this.state = { close: false }
  }

  closeFeedback = () => {
    this.setState({ close: !this.state.close })
  }

  handleSubmit(event) {
    // Do not submit form via HTTP, since we're doing that via XHR request.
    event.preventDefault()
    // Loop through this component's refs (the fields) and add them to the
    // formData object. What we're left with is an object of key-value pairs
    // that represent the form data we want to send to Netlify.
    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    const localUrl = globalHistory.location.origin

    // Set options for axios. The URL we're submitting to
    // (this.props.location.pathname) is the current page.
    const axiosOptions = {
      url: localUrl,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    // Submit to Netlify. Upon success, set the feedback message and clear all
    // the fields within the form. Upon failure, keep the fields as they are,
    // but set the feedback message to show the error state.
    axios(axiosOptions)
      .then(response => {
        this.setState({
          feedbackMsg:
            "Sua mensagem foi enviada! Vamos te responder assim que possível.",
        })
        this.domRef.current.reset()
      })
      .catch(err =>
        this.setState({
          feedbackMsg:
            "Sua mensagem não pôde ser enviada. Que tal entrar em contato com a gente por telefone ou e-mail?",
        })
      )
  }
  render() {
    return (
      <div
        className={contactStyles.wrapper}
        data-sal="slide-up"
        data-sal-delay="0"
        data-sal-easing="ease"
      >
        <div className={contactStyles.box}>
          <h3>Fale com a gente!</h3>

          {this.state.feedbackMsg && (
            <div
              className={
                this.state.close ? contactStyles.hide : contactStyles.feedback
              }
            >
              <button onClick={this.closeFeedback}>
                <FontAwesomeIcon icon="times" className="fa-lg" />
              </button>
              <p>{this.state.feedbackMsg}</p>
            </div>
          )}

          <form
            ref={this.domRef}
            name="Contato Table"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={event => this.handleSubmit(event)}
          >
            <input
              ref="form-name"
              type="hidden"
              name="form-name"
              value="Contato Table"
            />
            <input ref="name" type="text" name="name" placeholder="Nome" />
            <input ref="email" type="email" name="email" placeholder="E-mail" />
            <input
              ref="phone"
              type="tel"
              name="phone"
              placeholder="Telefone"
              maxLength="11"
            />
            <select ref="subject" name="subject" defaultValue={"Assunto"}>
              <option value="Assunto" disabled hidden>
                Assunto
              </option>
              <option value="Proposta">Proposta</option>
              <option value="Orçamento">Orçamento</option>
              <option value="Currículo">Currículo</option>
            </select>
            <textarea ref="message" name="message" placeholder="Mensagem" />

            <div className={contactStyles.footer}>
              <button type="submit" className="primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className={contactStyles.bottom}></div>
      </div>
    )
  }
}

export default ContactForm
