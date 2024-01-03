// AboutUs.js
import React, { useState } from 'react';
import './About.css'; // Import the CSS file

const AboutUs = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    'https://images.unsplash.com/photo-1568861743148-db325d9383bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1526069631228-723c945bea6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="about-us">
      <h1 id='welcome'>Welcome to Our Restaurant</h1>
      <p id='paragrafi'>
        Established in 20XX, our restaurant has been serving delicious and
        mouth-watering dishes to our valued customers.
      </p>
      <p id='paragrafi'>
        At our restaurant, we take pride in using
        fresh, locally-sourced ingredients to create a culinary experience that
        delights the senses.
      </p>
      <p id='paragrafi'>
        Our chefs are dedicated to crafting unique flavors that represent the
        rich traditions of both local and international cuisines.
      </p>
      <div className="image-container">
        {images.map((image, index) => (
          <img
          id='imazhi'
            key={index}
            src={image}
            alt={`Restaurant Interior ${index + 1}`}
            onClick={() => openLightbox(image)}
          />
        ))}
      </div>
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img  src={lightboxImage} alt="Full-size Image" />
        </div>
      )}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47934.06594225535!2d19.77662373248118!3d41.333241804092914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2zVGlyYW7DqywgU2hxaXDDq3JpYQ!5e0!3m2!1ssq!2s!4v1703705542251!5m2!1ssq!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <a href='/' className="home-link" >Go to Home</a>
    </div>
  );
};

export default AboutUs;
