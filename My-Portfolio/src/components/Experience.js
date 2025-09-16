import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Buugcy',
      role: 'MERN Stack Trainee',
      duration: 'Jun 2025 - Sept 2025',
      location: 'Remote',
      description: 'I recently completed a hands-on MERN stack internship at Buugcy, where I gained practical experience in building full-stack web applications from the ground up. During the internship, I successfully developed four complete projects using HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js, applying both front-end and back-end development principles.',
      highlights: [
        'Developed 4 complete full-stack projects including Master Mind game, E-commerce website, and authentication app',
        'Contributed to live company initiatives including Buugcy\'s internal HR Management System (HRMS)',
        'Enhanced user interfaces, optimized MongoDB queries, and integrated front-end components with back-end logic',
        'Gained exposure to real-world development environments, version control with Git, debugging, and agile workflows'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML', 'CSS']
    },
    {
      id: 2,
      company: 'Buugcy',
      role: 'MERN Stack Trainee',
      duration: 'Jul 2024 - Oct 2024',
      location: 'Remote',
      description: 'Completed an intensive MERN stack training program at Buugcy, focusing on modern web development technologies and best practices. This experience provided comprehensive knowledge of full-stack development and real-world application building.',
      highlights: [
        'Mastered MERN stack technologies through hands-on project development',
        'Built responsive web applications with modern UI/UX principles',
        'Implemented RESTful APIs and database integration',
        'Collaborated with development teams on live projects'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Git']
    },
    {
      id: 3,
      company: 'NCCS',
      role: 'Python Intern',
      duration: 'Jun 2023 - Sept 2023',
      location: 'Pakistan',
      description: 'Completed a comprehensive Python internship focusing on cybersecurity applications and programming fundamentals. Gained valuable experience in Python development, security protocols, and data analysis techniques.',
      highlights: [
        'Mastered Python programming fundamentals and advanced concepts',
        'Developed security-focused applications and scripts',
        'Learned cybersecurity best practices and threat analysis',
        'Worked on data analysis and automation projects',
        'Gained experience with Python libraries for security and data processing'
      ],
      technologies: ['Python', 'Data Analysis', 'Security Protocols', 'Automation', 'Scripting']
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        
        <motion.p 
          className="experience-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My journey in software development through internships and training programs
        </motion.p>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-company">
                    <FaBriefcase className="company-icon" />
                    <h3>{exp.company}</h3>
                  </div>
                  <div className="experience-meta">
                    <div className="experience-duration">
                      <FaCalendarAlt />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="experience-location">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <h4 className="experience-role">{exp.role}</h4>
                <p className="experience-description-text">{exp.description}</p>
                
                <div className="experience-highlights">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-technologies">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="timeline-marker"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
