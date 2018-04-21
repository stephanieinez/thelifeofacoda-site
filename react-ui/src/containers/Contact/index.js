import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from '../../components';

class Contact extends Component {
  state = {
    loadingMail: false,
    mailError: false,
    mailSuccess: false,
    disableButton: false,
  };

  contactFromSubmit = (submission) => {
    const { email, message } = submission;
    this.setState(
      {
        loadingMail: true,
        mailError: false,
        mailSuccess: false,
        disableButton: true,
      },
      () => {
        fetch('http://localhost:5000/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            message,
          }),
        })
          .then(response => response.json())
          .then(() => {
            this.setState({
              loadingMail: false,
              mailSuccess: true,
              disableButton: false,
            });
          })
          .catch((error) => {
            this.setState({ mailError: true, disableButton: false });
            console.log(error);
          });
      },
    );
  };

  render() {
    const { loadingMail, mailError, mailSuccess, disableButton } = this.state;
    const { image, contactText } = this.props;
    return (
      <div>
        <ContactForm
          contactText={contactText}
          image={image}
          submitForm={this.contactFromSubmit}
          loadingMail={loadingMail}
          mailError={mailError}
          mailSuccess={mailSuccess}
          disableButton={disableButton}
        />
      </div>
    );
  }
}

Contact.defaultProps = {
  contactText: '',
  image: '',
};

Contact.propTypes = {
  contactText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Contact;
