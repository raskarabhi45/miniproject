import React from 'react'
import "./Contact.css"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvgfozl', 'template_zflm1g2', form.current, 'xuiiD69Xt78yM9-d1')
      e.target.reset();
      alert("The Form has been Submitted.");
  };


  return (
<>
<section className="contact" id="contact">


   

    <h1 className="contact-title ">CONTACT US</h1>
    <h4 className="contact-sub-title ">WE ARE AT YOUR SERVICES</h4>

 

           <form ref={form} onSubmit={sendEmail}>
           <div className="contact-form ">

                <div className="form-item  ">
                        <input type="text" name='name' className="form-control" placeholder="Name"/>
                </div>

                <div className="form-item  ">
                        <input type="email" name='email'  className="form-control" placeholder="Email"/>
                </div>

    
                <div className="form-item  ">
                        <input type="text" name='subject' className="form-control" placeholder="Subject"/>
                </div>
           

                <div className="form-item  ">
                        <textarea  name='message'  className="form-control" id="" placeholder="Message"></textarea>
                </div>
            

            
                <div className="form-item  ">
                <button data-aos="fade-up" type='submit' className='btn btn-primary'>Send Message</button>
                </div>

                </div>

                </form>
         

       





</section>
</>
  )
}

export default Contact