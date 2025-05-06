import style from './Tabs.module.css';
import { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

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
    // form --------------------------------------------
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const firstname = formData.get('firstname');
      const lastname = formData.get('lastname');
      const email = formData.get('email');
      // const phone = formData.get('phone');
      // const object = formData.get('object');
      const message = formData.get('message');
      console.log(firstname, lastname, email, message);
    }
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
          <p>If you're interested in my work, don't hesitate to contact me : </p>
          <form onSubmit={handleSubmit} className={style['contact-form']}>
            <div>
              <input name='firstname' placeholder='First name' type="text" required/>
              <input name='lastname' placeholder='Last name' type="text" required/>
            </div>
            <div>
              <input name='email' placeholder='Email' type="text" required/>
              <input name='phone' placeholder='Phone number' type="text" />
            </div>
              <input name='object' placeholder='Object' type="text" required/>
              <input name='message' placeholder='Message' type="text" className={style['message']} required/>
              <button type='submit'>Send</button>
          </form>
        </animated.div>
        </animated.section>
    )
}
export default SecretTab;
      // const [formState, setFormState] = useState({
      //   name: '',
      //   email: '',
      //   subject: '',
      //   message: '',
      // });
      // const [status, setStatus] = useState({
      //   submitted: false,
      //   submitting: false,
      //   info: { error: false, msg: null }
      // });
    
      // const handleChange = e => {
      //   setFormState({
      //     ...formState,
      //     [e.target.name]: e.target.value
      //   });
      // };
    
      // const handleSubmit = async e => {
      //   e.preventDefault();
      //   setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
        
      //   try {
      //     // Vous pouvez remplacer cette URL par celle de votre service d'envoi d'emails
      //     // Par exemple, un endpoint de votre backend, une fonction serverless, ou un service comme EmailJS
      //     const response = await fetch('/api/send-email', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json'
      //       },
      //       body: JSON.stringify({ 
      //         name: formState.name,
      //         email: formState.email,
      //         subject: formState.subject,
      //         message: formState.message,
      //         // Spécifiez votre adresse email en tant que destinataire
      //         to: "benedicte.lagasse@blagasse.be"  
      //       })
      //     });
      //     const data = await response.json();
          
      //     if (response.ok) {
      //       setStatus({
      //         submitted: true,
      //         submitting: false,
      //         info: { error: false, msg: "Merci ! Votre message a été envoyé avec succès." }
      //       });
      //       setFormState({
      //         name: '',
      //         email: '',
      //         subject: '',
      //         message: '',
      //       });
      //     } else {
      //       setStatus({
      //         submitted: false,
      //         submitting: false,
      //         info: { error: true, msg: data.message || "Une erreur est survenue. Veuillez réessayer." }
      //       });
      //     }
      //   } catch (error) {
      //     setStatus({
      //       submitted: false,
      //       submitting: false,
      //       info: { error: true, msg: "Une erreur réseau est survenue. Vérifiez votre connexion." }
      //     });
      //   }
      // };

       
        // {status.info.msg && (
        //   <div>
        //     {status.info.msg}
        //   </div>
        // )}
        
        // <form onSubmit={handleSubmit}>
        //   <div>
        //     <label htmlFor="name">
        //       Nom
        //     </label>
        //     <input
        //       type="text"
        //       id="name"
        //       name="name"
        //       value={formState.name}
        //       onChange={handleChange}
        //       required
        //     />
        //   </div>
          
        //   <div className="mb-4">
        //     <label htmlFor="email">
        //       Email
        //     </label>
        //     <input
        //       type="email"
        //       id="email"
        //       name="email"
        //       value={formState.email}
        //       onChange={handleChange}
        //       required
        //     />
        //   </div>
          
        //   <div className="mb-4">
        //     <label htmlFor="subject">
        //       Sujet
        //     </label>
        //     <input
        //       type="text"
        //       id="subject"
        //       name="subject"
        //       value={formState.subject}
        //       onChange={handleChange}
        //       required
        //     />
        //   </div>
          
        //   <div className="mb-6">
        //     <label htmlFor="message">
        //       Message
        //     </label>
        //     <textarea
        //       id="message"
        //       name="message"
        //       value={formState.message}
        //       onChange={handleChange}
        //       rows="5"
        //       required
        //     ></textarea>
        //   </div>
          
        //   <button
        //     type="submit"
        //     disabled={status.submitting}
        //   >
        //     {status.submitting ? 'Envoi en cours...' : 'Envoyer'}
        //   </button>
        // </form>