import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
// import Footer from '../Footer/footer.js'; 


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
  const address = "Address : No:123,AAAAAAAAAAAAA,BBBBBBBBBBB,CCCCCCCCCCCC";
  const addressLines = address.split(',');

  return (
    
    <div className="back">
      <div className='contInfor'>
        <h1 className="contacth1">Contact Us</h1>
        <la className="contacth2">Telephone No : 0123456789 </la>
        <br />
        {addressLines.map((line, index) => (
        <p className="contacth2" key={index} style={{ marginLeft: index !== 0 ? '80px' : '0' }}>{line}</p>
      ))}

      </div>
    <div className="contact">

      <form ref={form} onSubmit={sendEmail}>
        
        <la className='la'>Name</la>
        <input className='i1' type="name" name="from_name" />
        <br />
        <la className='la' >Email</la>
        <input className='i1' type="email" name="from_email" />
        <br />
        <la className='la' >Message</la>
        <textarea className='t1' name="message" />
        <br />
        {/* <input className='i2' type="submit" value="Send" /> */}
        <button className='buttonsend' type='submit' value="Send">Send
          
          <div class="star-1">
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }}
              version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  class="fil0"></path>
              </g>
            </svg>
          </div>
          <div class="star-2">
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }}
              version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  class="fil0"></path>
              </g>
            </svg>
          </div>
          <div class="star-3">
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }}
              version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  class="fil0"></path>
              </g>
            </svg>
          </div>
          <div class="star-4">
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }}
              version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  class="fil0"></path>
              </g>
            </svg>
          </div>
          <div class="star-5">
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }}
              version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  class="fil0"></path>
              </g>
            </svg>
          </div>
          <div class="star-6">
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }}
              version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  class="fil0"></path>
              </g>
            </svg>
          </div>
        </button>
      </form>
    </div>
    </div>
    
  );
};
export default Contact;
