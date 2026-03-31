import React from 'react';
import { motion } from 'framer-motion';
import Avatar from 'react-avatar';

import './About.css'; // optional CSS for styling

const About = () => {
  return (
    <div className='container my-5 about'>
      <div className='about_container'>

<div className="avatar_container">
        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' className='profile-img'
        />
        {/* <span className="hello">Hello 👋</span> */}
</div>
<div className='about_section'>
        <h2 className='fw-bold mb-3'> 💻 About Me</h2>
        <p>
          Full-Stack Developer currently transitioning from an Office Administration background. Skilled in building responsive web applications using React, Node.js, Express, and MySQL.
        
          Developed real-world projects such as a HMS and Swiggy Clone with a focus on clean UI and efficient backend. Bringing strong problem-solving, organizational skills, and consistency into software development.
        
          Actively seeking opportunities to contribute and grow as a developer.
        </p>

      </div>
      </div>
    </div>
  );
};

export default About;