import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 70 },
    { name: 'Node.js', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 95 }
  ];

  const frontendSkills = [
    { name: 'React', level: 70 },
    { name: 'Next.js', level: 65 },
    { name: 'TypeScript', level: 75 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Javascript', level: 85 },
    { name: 'HTML', level: 90 }
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div 
      className="skill-item"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div 
          className="skill-progress"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        
        <div className="skills-content">
          <div className="skills-column">
            <motion.h3 
              className="skills-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technical Skills
            </motion.h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          <div className="skills-column">
            <motion.h3 
              className="skills-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Frontend Skills
            </motion.h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
