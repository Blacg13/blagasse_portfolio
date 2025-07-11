import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './Tabs.module.css';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
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
    <form ref={form} onSubmit={sendEmail} className={style['contact-form']}>
        <div>
            <label>Name : </label>
            <input type="text" name="user_name" required />
        </div>
        <div>
            <label>Email : </label>
            <input type="email" name="user_email" required/>
        </div>
      <label>Message : </label>
      <textarea name="message" required/>
      <button type="submit">Send</button>
    </form>
  );
};
export default ContactForm;
