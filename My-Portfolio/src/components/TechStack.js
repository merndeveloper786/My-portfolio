import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiBootstrap,
  SiTypescript,
  SiVuedotjs
} from 'react-icons/si';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' }
  ];

  return (
    <section className="tech-stack section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technology Stack
        </motion.h2>
        
        <motion.p 
          className="tech-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies I work with to bring ideas to life
        </motion.p>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="tech-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="tech-icon" style={{ color: tech.color }}>
                  <IconComponent />
                </div>
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
