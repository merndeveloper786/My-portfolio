import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A modern e-commerce platform built with React 18+, Vite, and Tailwind CSS. Features include product catalog, shopping cart, user authentication, and payment integration for seamless online shopping experience.',
      image: '/e-commerce.jpg',
      technologies: [FaReact, SiTailwindcss, SiJavascript],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://e-commer-website-omega.vercel.app/',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Fast Food Website - Pizzazious',
      description: 'A full-stack restaurant website built with React.js and Node.js. Features online ordering system, menu management, user authentication, and real-time order tracking for enhanced customer experience.',
      image: '/pizzacious.webp',
      technologies: [FaReact, FaNodeJs, SiMongodb, SiExpress],
      github: 'https://github.com/yourusername/pizzazious',
      live: 'https://pizzazious.netlify.app',
      category: 'Full Stack'
    },
    {
      id: 3,
      title: 'LaundryHUB Mobile Application',
      description: 'A comprehensive laundry management mobile app built with React Native. Features real-time pricing, scheduling, order tracking, and rating system for seamless door-to-door laundry services.',
      image: '/laundry.jpg',
      technologies: [FaReact, FaNodeJs, SiMongodb, SiExpress],
      github: 'https://github.com/yourusername/laundryhub',
      live: 'https://play.google.com/store/apps/details?id=com.was.laundryhub',
      category: 'Mobile App'
    },
    {
      id: 4,
      title: 'Authentication Application',
      description: 'A secure authentication system built with React.js, Node.js, and Express.js. Features user registration, login, password reset, JWT tokens, and role-based access control for comprehensive user management.',
      image: '/authentication.jpg',
      technologies: [FaReact, FaNodeJs, SiExpress],
      github: 'https://github.com/yourusername/auth-app',
      live: 'https://auth-app-frontend-omega.vercel.app/',
      category: 'Full Stack'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="projects-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects that showcase my skills and experience
        </motion.p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((TechIcon, techIndex) => (
                    <div key={techIndex} className="tech-icon">
                      <TechIcon />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/yourusername" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
