import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsOverview = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "Monitor",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "JavaScript", level: 92, color: "bg-yellow-500" },
        { name: "TypeScript", level: 88, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
        { name: "Vue.js", level: 85, color: "bg-green-500" },
        { name: "HTML5/CSS3", level: 95, color: "bg-orange-500" }
      ]
    },
    {
      title: "Backend Development",
      icon: "Server",
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Python", level: 85, color: "bg-blue-500" },
        { name: "Express.js", level: 88, color: "bg-gray-600" },
        { name: "Django", level: 82, color: "bg-green-700" },
        { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
        { name: "MongoDB", level: 88, color: "bg-green-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "Settings",
      skills: [
        { name: "Git/GitHub", level: 92, color: "bg-gray-800" },
        { name: "Docker", level: 80, color: "bg-blue-600" },
        { name: "AWS", level: 78, color: "bg-orange-600" },
        { name: "Firebase", level: 85, color: "bg-yellow-600" },
        { name: "Figma", level: 88, color: "bg-purple-500" },
        { name: "Webpack", level: 82, color: "bg-blue-400" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = entry.target.dataset.category;
            setTimeout(() => {
              setAnimatedSkills(prev => ({
                ...prev,
                [categoryIndex]: true
              }));
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll('[data-category]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, isAnimated, delay = 0 }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-text-primary">{skill.name}</span>
        <span className="text-sm text-text-secondary">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
          style={{
            width: isAnimated ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );

  const SkillCategory = ({ category, index }) => (
    <div
      data-category={index}
      className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
          <Icon name={category.icon} size={24} className="text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary">{category.title}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            isAnimated={animatedSkills[index]}
            delay={skillIndex * 100}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks with hands-on experience in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-text-primary mb-6">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "GraphQL", "Redux", "Next.js", "Nuxt.js", "Socket.io", "Jest",
              "Cypress", "Sass/SCSS", "Bootstrap", "Material-UI", "Ant Design",
              "Stripe API", "PayPal API", "REST APIs", "Microservices"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Certifications & Achievements
            </h3>
            <p className="text-text-secondary">
              Professional certifications and notable achievements
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                year: "2023",
                icon: "Award"
              },
              {
                title: "React Developer Certification",
                issuer: "Meta",
                year: "2023",
                icon: "Code"
              },
              {
                title: "Google Analytics Certified",
                issuer: "Google",
                year: "2022",
                icon: "BarChart3"
              },
              {
                title: "Scrum Master Certified",
                issuer: "Scrum Alliance",
                year: "2022",
                icon: "Users"
              }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={cert.icon} size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary text-sm mb-1">
                  {cert.title}
                </h4>
                <p className="text-text-secondary text-xs mb-1">{cert.issuer}</p>
                <p className="text-primary text-xs font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;