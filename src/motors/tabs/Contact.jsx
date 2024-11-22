import React, { useRef } from 'react';
import { Tabsinfo7, ContactCom, ContactD, ContactDiv, Contact1, Contact2, Contact3 } from './Tabs'
import Hot from './rasm/Screenshot_1 1.svg'
import emailjs from '@emailjs/browser';


const Contactcomponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_otxrew9', 'template_ooumkoc', form.current, {
        publicKey: 'p8U_uxaguH9kvrFeo',
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
    <ContactCom>
      <ContactD>
      <ContactDiv>
        <img src={Hot} alt="" />
          </ContactDiv>
          <Contact1>
            <Contact2>
              <h1>Phone number:</h1>
              <h2>+7 237 181 181</h2>
              <h2>+7 210 181 191</h2>
            </Contact2>
            <Contact3>
              <h1>E-mail:</h1>
              <h2>logo.uz</h2>
            </Contact3>
          </Contact1>
          </ContactD>
          <Tabsinfo7>
      <h1>Send a question</h1>
      <form ref={form} onSubmit={sendEmail}>
      <input id="input3" type="text" name="user_name" placeholder='Your name'/>
      <input id="input1" type="email" name="user_email" placeholder='Your email'/>
      <textarea placeholder="Your question"/>
      <button type="submit" value="Send" >Send question</button>
    </form>
</Tabsinfo7>
    </ContactCom>
  )
}

export default Contactcomponent