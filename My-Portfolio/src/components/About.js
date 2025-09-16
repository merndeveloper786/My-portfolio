import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="profile-card">
              <div className="profile-avatar">
                <img 
                  src="/ProfilePic.jpeg" 
                  alt="Aoun Raza"
                  className="profile-image"
                />
              </div>
              <h3>Aoun Raza</h3>
              <p>Full Stack Developer</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="about-description">
              A passionate <strong>Full Stack Developer</strong> based in <strong>Burewala, Pakistan</strong>.
            </p>
            
            <p>
              I specialize in building modern web applications using MongoDB, Express.js, React, and Node.js. 
              With a strong foundation in both frontend and backend development, I create seamless user 
              experiences backed by robust server-side architecture.
            </p>
            
            <p>
              My journey in web development started with a curiosity about how websites work, and it has 
              evolved into a passion for creating digital solutions that make a difference. I enjoy 
              working with cutting-edge technologies and am always eager to learn new tools and frameworks.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">6+</span>
                <span className="highlight-text">Months Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">4+</span>
                <span className="highlight-text">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-text">Technologies Mastered</span>
              </div>
            </div>
            
            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="https://drive.google.com/file/d/1Bj1uPPxKNEpdioilJ74x8t1I_E713G7s/view?usp=sharing" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
