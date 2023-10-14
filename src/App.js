import React from 'react';
import './App.css';

import myImg from "./images/IMG_20220621_195841_714-modified.png"

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <div className="content">
          <h2>About Me</h2>
          <p>My name is <b>Ujjwal</b> and I'm a versatile software developer with a strong foundation in HTML, CSS, and JavaScript. My expertise spans across the MERN and MEAN stacks, allowing me to craft dynamic and interactive web applications. I'm well-versed in Java and have experience in machine learning, data structures, and algorithms. My proficiency extends to database management with MySQL, and I possess a deep understanding of computer networks and operating systems. With a passion for problem-solving, I thrive on transforming innovative ideas into practical, efficient solutions. My commitment to learning and a knack for clear communication make me a valuable team member in any tech-driven endeavor.</p>
          <img className="small-image" src={myImg} alt="mode" />


        </div>
      </section>

      <section id="projects">
        <div className="content">
          <h2>Projects</h2>
          <p>I've had the privilege of working on a diverse range of projects that showcase my skills as a software developer. Among my standout projects is an e-commerce website built using the MERN stack. This platform encompasses user authentication, a dynamic product catalog, and seamless online payment integration, ensuring a robust and user-friendly shopping experience. Additionally, I've delved into the world of machine learning, where I designed a sentiment analysis model. This machine learning solution employs natural language processing techniques to categorize text sentiments as positive or negative, offering valuable insights for sentiment tracking and analysis. Lastly, I've contributed to the realm of network monitoring by developing a Java-based network monitoring application. This tool provides real-time insights into network traffic, making it a valuable asset for diagnosing connectivity issues. These projects represent just a glimpse of my portfolio, highlighting my passion for technology and problem-solving.</p>
          
        </div>
      </section>

      <section id="skills">
        <div className="content">
          <h2>Skills</h2>
          <p> As a software developer, I have honed my expertise in a variety of areas. In web development, I am proficient in the MERN and MEAN stacks, allowing me to craft dynamic and interactive web applications. My knowledge extends beyond front-end technologies like HTML, CSS, and JavaScript to encompass back-end technologies such as Node.js and Express. Furthermore, I possess strong skills in Java, making me well-equipped to tackle a wide range of software development tasks. In the realm of machine learning, I've developed models for sentiment analysis, leveraging the power of natural language processing. My experience also extends to database management with MySQL, as well as a deep understanding of computer networks and operating systems. With a penchant for problem-solving, I am driven to transform innovative ideas into efficient, real-world solutions. I am dedicated to continuous learning and am a clear and effective communicator, making me a valuable asset in any tech-driven endeavor.</p>
          <div className="skills-images">
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="content">
        <section id="contact">
  <div className="content">
    <h2>Contact Me</h2>
    <p>Feel free to connect with me through the following channels:</p>
    
    <a href="https://www.instagram.com/ujjwal.2003" target="_blank" rel="noopener noreferrer">
      Instagram
    </a>
    
    <a href="https://github.com/ujjwal738" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
    
    <a href="https://www.linkedin.com/in/ujjwal-76256a227" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    
    <a href="mailto:ujjwal.02022@gmail.com">
      Email
    </a>
  </div>
</section>
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default App;
