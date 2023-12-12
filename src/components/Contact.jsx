/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    contactNumber: '',
  });
  const createItem = () => {
    const newItem = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      message: formData.message,
    };

    axios
      .post('http://localhost:5000/items', newItem)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log('POST Response:', response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('POST Error:', error);
      });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidNumber = (number) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(number);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-use-before-define
    if (validateForm()) {
      // eslint-disable-next-line no-console
      console.log('Form submitted:', formData);

      if (formData.id) {
        // eslint-disable-next-line no-undef
        updateItem();
      } else {
        createItem();
      }
      setFormData({
        id: '',
        name: '',
        email: '',
        contactNumber: '',
        message: '',
      });

      setFormErrors({
        name: '',
        email: '',
        contactNumber: '',
      });
    } else {
      // eslint-disable-next-line no-console
      console.log('Form validation failed');
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.contactNumber.trim()) {
      errors.contactNumber = 'Contact Number is required';
      isValid = false;
    } else if (!isValidNumber(formData.contactNumber)) {
      errors.contactNumber = 'Invalid contact number';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleKeyPress = (e) => {
    const isNumeric = /^[0-9]+$/.test(e.key);
    if (!isNumeric) {
      e.preventDefault();
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <span className="error-message">{formErrors.name}</span>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <span className="error-message">{formErrors.email}</span>
        </label>

        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <span className="error-message">{formErrors.contactNumber}</span>
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <div className="submit_button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
