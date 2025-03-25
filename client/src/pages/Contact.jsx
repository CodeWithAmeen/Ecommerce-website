import { useState } from 'react';
import './CSS/Contact.css';

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <>
      <section className="section-contact">
        {/* Contact Heading */}
        <div className='contact-content container'>
          <h1 className='main-heading'>Contact Us</h1>
          <p className='sub-heading'>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, our team is always here to assist you.</p>
        </div>

        {/* Contact Form Main */}
        <div className='container grid grid-two-cols'>
          <div className='contact-img'>
            <img src={'/images/Contact.png'} alt='We are always ready to help you.' />
          </div>

          {/* Contact Form */}
          <section className='section-form'>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className='input-group'>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' id="username" onChange={handleInput}
                  value={contact.username} autoComplete='off' required />
              </div>
              <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id="email" onChange={handleInput}
                  value={contact.email} autoComplete='off' required />
              </div>
              <div className='input-group'>
                <label htmlFor='message'>Message</label>
                <textarea name='message' id="message" onChange={handleInput}
                  value={contact.message} autoComplete='off' required cols="30" rows="10" />
              </div>
              <div className='button-group'>
                <button type='submit' className="submit-btn"><strong>Submit</strong></button>
              </div>
            </form>
          </section>
        </div>

        {/* Social Media Section */}
        <div className="social-media">
          <h2 className="social-heading">Join Us On</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon fb-icon">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495V14.708H9.875v-3.417h2.946V8.741c0-2.92 1.785-4.513 4.392-4.513 1.25 0 2.325.093 2.638.135v3.06l-1.81.001c-1.419 0-1.693.675-1.693 1.665v2.18h3.386l-.442 3.417h-2.944V24h5.768C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon ig-icon">
                <path d="M12 2.163c3.204 0 3.584.013 4.85.07 1.17.054 1.796.24 2.217.403.482.187.825.41 1.188.774.363.363.587.706.774 1.188.163.421.349 1.047.403 2.217.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.24 1.796-.403 2.217a3.61 3.61 0 01-.774 1.188c-.363.363-.706.587-1.188.774-.421.163-1.047.349-2.217.403-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.796-.24-2.217-.403a3.61 3.61 0 01-1.188-.774c-.363-.363-.587-.706-.774-1.188-.163-.421-.349-1.047-.403-2.217-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.24-1.796.403-2.217a3.61 3.61 0 01.774-1.188c.363-.363.706-.587 1.188-.774.421-.163 1.047-.349 2.217-.403 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.012-4.947.072-1.276.059-2.153.27-2.903.573a5.904 5.904 0 00-2.14 1.39 5.907 5.907 0 00-1.39 2.14c-.303.75-.514 1.627-.573 2.903-.06 1.277-.072 1.688-.072 4.947s.012 3.67.072 4.947c.059 1.276.27 2.153.573 2.903a5.904 5.904 0 001.39 2.14 5.907 5.907 0 002.14 1.39c.75.303 1.627.514 2.903.573 1.277.06 1.688.072 4.947.072s3.67-.012 4.947-.072c1.276-.059 2.153-.27 2.903-.573a5.904 5.904 0 002.14-1.39 5.907 5.907 0 001.39-2.14c.303-.75.514-1.627.573-2.903.06-1.277.072-1.688.072-4.947s-.012-3.67-.072-4.947c-.059-1.276-.27-2.153-.573-2.903a5.904 5.904 0 00-1.39-2.14 5.907 5.907 0 00-2.14-1.39c-.75-.303-1.627-.514-2.903-.573-1.277-.06-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.132a3.97 3.97 0 110-7.94 3.97 3.97 0 010 7.94zm7.605-10.85a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
            <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon discord-icon">
                <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.505c-.202.371-.433.861-.594 1.25a17.4 17.4 0 00-5.666 0c-.168-.389-.39-.879-.593-1.25A19.785 19.785 0 003.68 4.37c-2.759 4.571-3.502 9.017-3.132 13.388a18.493 18.493 0 005.63 2.905c.452-.628.86-1.294 1.225-1.994a11.832 11.832 0 01-1.937-.934c.163-.119.324-.24.484-.363 3.788 2.608 7.9 2.608 11.607 0 .163.13.323.251.485.363-.623.38-1.26.706-1.937.933.379.7.788 1.366 1.225 1.994a18.49 18.49 0 005.63-2.905c.391-4.537-.535-8.963-3.268-13.388zM8.547 13.8c-1.179 0-2.141-1.097-2.141-2.446s.947-2.446 2.141-2.446c1.179 0 2.142 1.097 2.142 2.446 0 1.349-.948 2.446-2.142 2.446zm6.904 0c-1.179 0-2.142-1.097-2.142-2.446s.947-2.446 2.142-2.446c1.178 0 2.141 1.097 2.141 2.446 0 1.349-.947 2.446-2.141 2.446z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Location Section with Map */}
        <div className="location-section">
          <h2 className="location-heading">Our Location</h2>
          <p className="location-details">1234 Street Name, City, State, Country, 12345</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1X2dyZZLflB-a76-ep7TbKmliufg&hl=en&ehbc=2E312F"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
