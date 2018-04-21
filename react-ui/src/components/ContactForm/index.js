import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import './contact-form.css';

class ContactForm extends Component {
  state = {
    email: '',
    message: '',
    emailError: '',
  };

  handleInputChange = id => event =>
    this.setState({ [id]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.email) {
      return this.setState({
        emailError: 'Please enter your email address',
      });
    }
    return this.setState({ emailError: '' }, this.props.submitForm(this.state));
  };

  render() {
    const { email, message } = this.state;
    const { contactText, image } = this.props;
    const body = marked(contactText);
    return (
      <div>
        <div
          className="content-page-header"
          style={{ backgroundImage: `url(${image})` }}
        />{' '}
        <div className="contact-container">
          <div className="contact-form-container">
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <form>
              <div>
                <label htmlFor="contact-email">Email</label>
                {this.state.emailError ? (
                  <div className="email-error">
                    Please enter your email address
                  </div>
                ) : null}
                <div id="contact-email">
                  <input
                    onChange={this.handleInputChange('email')}
                    type="email"
                    name="email"
                    placeholder="Email (Required)"
                    value={email}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message">Message</label>
                <div>
                  <textarea
                    onChange={this.handleInputChange('message')}
                    id="contact-message"
                    type="text"
                    name="message"
                    rows="10"
                    cols="40"
                    placeholder="Message"
                    value={message}
                  />
                </div>
              </div>
              <div>
                {this.props.mailSuccess && (
                  <div className="mail-success">
                    Your message was successfully sent.
                  </div>
                )}
                {this.props.mailError && (
                  <div> Your message failed to send. Please try again. </div>
                )}
                {this.props.loadingMail && (
                  <div className="mail-loading">...Sending</div>
                )}
                <button
                  type="submit"
                  onClick={this.handleSubmit}
                  disabled={this.props.disableButton}
                  className={this.props.disableButton ? 'disable-button' : null}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ContactForm.defaultProps = {
  contactText: '',
  image: '',
};

ContactForm.propTypes = {
  contactText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, //eslint-disable-line
};

export default ContactForm;
