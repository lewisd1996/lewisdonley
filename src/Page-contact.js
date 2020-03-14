import React, { useState }  from "react";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {AnimatePresence, motion} from "framer-motion";
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function ContactPage() {
    
  const pageTransition = {
    in: {
      translateY: 0,
      opacity: 1
    },

    out: {
      translateY: "-100vh",
      opacity: 0.2
    }
  };

  var service_id = "default_service";
  var template_id = "template_RMoAKrM2";
 
  const { register, handleSubmit, errors } = useForm();

  const [isActive,setActive] = useState("enabled")

  const onSubmit = (data, e) => {
    var template_params = {
      "from_name": e.target.elements.Name.value + " " + e.target.elements.Email.value,
      "to_name": "Lewis",
      "message_html": e.target.elements.Message.value
   }

    emailjs.send(service_id, template_id, template_params, 'user_fh2qX7JcfJzgm5VoYXYFl')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       alert("Your email has been submitted. Thank you!")
    }, (err) => {
       console.log('FAILED...', err);
       alert("Error occured. Your email has not been sent.")
    });


  };
  console.log(errors);

    return (    
      <motion.div 
      exit="out"
      animate="in"
      initial="out"
      variants={pageTransition} 
      >
      <section data-index="6" className="contact-page" id="contact">
        <h1 className="contact-page__contact-title">Contact</h1>

        <div className="contact-form">
          <ul className="contact-page__form-list">
          <form className="contact-page__form" onSubmit={handleSubmit(onSubmit)}>
          <li className="contact-page__form__list-item">
            <span className="contact-page__form__text">Name</span>
            <input className="contact-page__form__name-input" type="text" placeholder="Joe Bloggs" name="Name" ref={register({required: true, maxLength: 80})} />
          </li>
          <li className="contact-page__form__list-item">
            <span className="contact-page__form__text">Email</span>
            <input type="Email" className="contact-page__form__email-input" placeholder="joebloggs@hello.io" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
            </li>
          <li className="contact-page__form__list-item">
            <span className="contact-page__form__text">Message</span>
            
            <textarea  placeholder="Talk to me!" className="contact-page__form__message-input" rows="4" cols="25" name="Message" ref={register({required: true, maxLength: 500})} />
          </li>
          <div className="btn-contact-wrapper">
          <button type="submit" className={` ${isActive === "enabled" ? 'btn-contact-submit' : 'btn-contact-submit btn-contact-submit__disabled'}`} onClick={() => setActive("disabled")}>
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
          </form>
          </ul>
      </div>
      </section>
      </motion.div>

      
    );
}

export default ContactPage;