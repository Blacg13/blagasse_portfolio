import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './Title.module.css';
import { useSpring, animated } from '@react-spring/web';

const ContactForm = () => {
  const [isActive, setActive] = useState(false);
    const [hasClicked, setHasClicked] = useState(false)
    const handleClick = () => {
      setActive(!isActive)
      if (!hasClicked) {
        setHasClicked(true)
      }    
    };
  // animations ----------------------------------
  const fade = useSpring({
        opacity: isActive ? 1 : 0,
        display: isActive ? 'block' : 'none',
        transform: `translateY(${isActive ? 0 : 20}px)`,
        config: { mass: 5, tension: 150, friction: 50 },
        delay: isActive ? 200 : 0,
      });
  // form --------------------------------------------
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
    //------------------------------------------------ 
  return (
    <section className={hasClicked ? style['contact-me-active'] : style['contact-me-inactive']}>
      <div 
        id='contact-title'
        className={style['contact-title']}
        onClick ={handleClick}>
            <h3>Contact Me</h3>
      </div>
      <animated.div 
        id='contact-content'
        className={style['contact-content']}
        style={fade}>
          <p>If you are interested in my work, don't hesitate to contact me : </p>
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
      </animated.div>
    </section>
  );
};
export default ContactForm;
