import style from './Tabs.module.css';
import { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import ContactForm from './ContactForm';

const SecretTab = ({disclosure}) => {
    const [isActive, setActive] = useState(false);
      // animations ----------------------------------
      const spin = useSpring({
        transform: `rotateY(${isActive ? 180 : 0}deg)`,
        config: { mass: 3, tension: 130, friction: 30 },
      });
      const fade = useSpring({
        opacity: isActive ? 1 : 0,
        display: isActive ? 'block' : 'none',
        transform: `translateY(${isActive ? 0 : 20}px)`,
        config: { mass: 5, tension: 150, friction: 50 },
        delay: isActive ? 200 : 0,
      });
      const disclosureAnimation = useSpring({
        opacity: disclosure ? 1 : 0,
        display: disclosure ? 'block' : 'none',
        config: { mass: 5, tension: 150, friction: 50 },
        delay: disclosure ? 200 : 0,
      });
      //------------------------------------------------
    // // form --------------------------------------------
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const form = e.target;
    //   const formData = new FormData(form);
    //   const firstname = formData.get('firstname');
    //   const lastname = formData.get('lastname');
    //   const email = formData.get('email');
    //   // const phone = formData.get('phone');
    //   // const object = formData.get('object');
    //   const message = formData.get('message');
    //   console.log(firstname, lastname, email, message);
    // }
    //--------------------------------------------------
    return (
      <animated.section id={"secretTab"} 
        className={style["secret-tab"]} 
        style={disclosureAnimation} 
        >
            <animated.div
          className={style['tab-spin-title']}
          style={spin}
          onClick ={() => setActive(!isActive)}
            >
          <div className={style['flip-card-container']}>
            <div
              className={
                isActive ? style['flip-card-recto'] : style['flip-card-verso']
              }
            >
              <h3>Gitignore</h3>
            </div>
          </div>
        </animated.div>
        <animated.div className={style['tab-content']} style={fade}>
          <p>If you are interested in my work, don't hesitate to contact me : </p>
          {/* <form onSubmit={handleSubmit} className={style['contact-form']}>
            <div>
              <div>
                <input name='firstname' placeholder='First name' type="text" required/>
                <input name='lastname' placeholder='Last name' type="text" required/>
              </div>
              <div>
                <input name='email' placeholder='Email' type="text" required/>
                <input name='phone' placeholder='Phone number' type="text" />
              </div>
            </div>
              <input name='object' placeholder='Object' type="text" required/>
              <textarea name='message' placeholder='Message' rows='6' className={style['message']} required/>
              <button type='submit' className={style['send-button']}>Send</button>
          </form> */}
          <ContactForm />
        </animated.div>
        </animated.section>
    )
}
export default SecretTab;