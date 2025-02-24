import React from 'react';
import './About.css'; // add css file  for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Delicious Bites</strong>, where we serve the finest culinary delights with a touch of love and passion. Our restaurant is dedicated to providing an unforgettable dining experience with a menu that features a variety of exquisite dishes made from the freshest ingredients.
      </p>
      <h2>Our Story</h2>
      <p>
        Established in 2020, Delicious Bites has quickly become a favorite spot for food enthusiasts. Our chefs bring years of experience and a deep love for cooking, ensuring that every meal is a masterpiece.
      </p>
      <h2>Contact Us</h2>
      <p>
        <strong>Address:</strong> 123 Foodie Lane, Gourmet City, TX 77001<br />
        <strong>Phone:</strong> (123) 456-7890<br />
        <strong>Email:</strong> contact@deliciousbites.com
      </p>
    </div>
  );
};

export default About;
