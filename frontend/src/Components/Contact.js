import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    
    emailjs
      .sendForm('service_qsa5mnw', 'template_a4fooqk', form.current, {
        publicKey: 'fQ81t1v3iWPQOc1np',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact">
      
    <form ref={form} onSubmit={sendEmail}>
      <la>Name</la>
      <input className="nameinput" type="text" name="from_name" />
      <br />
      <la>Email</la>
      <input type="email" name="from_email" />
        <br />
      <la>Message</la>
      <textarea name="message" />
        <br />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};
export default Contact;
