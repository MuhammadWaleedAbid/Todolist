/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';

import Contact from '../components/Contact';

import api from '../api';

// haslk

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ul key={contact.id}>
          <li>
            <strong>Name:</strong> {contact?.name}
          </li>
          <li>
            <strong>Email:</strong> {contact?.email}
          </li>
          <li>
            <strong>Contact Number:</strong> {contact?.contactNumber}
          </li>
          <li>
            <strong>Message:</strong> {contact?.message}
          </li>
          <li>
            <strong>ID:</strong> {contact.id}
          </li>

          <div className="btn">
            <button className="btn1_contacts">Edit</button>
            <button className="btn2_contacts">Delete</button>
          </div>
        </ul>
      ))}
    </div>
  );
}

// Home Component
export default function Contacts() {
  const [data, setData] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await api('get', 'http://localhost:5000/items');
      return response.data;
    } catch (error) {
      console.error('Error fetching item:', error);
      return {};
    }
  };
  useEffect(() => {
    fetchItems().then((item) => setData(item));
  }, []);

  return (
    <div className="contacts_details">
      <Contact />
      <div className="contact_down">
        <ContactList contacts={data} />
      </div>
    </div>
  );
}
