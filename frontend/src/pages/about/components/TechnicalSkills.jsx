import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'Monitor',
      color: 'bg-blue-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript/TypeScript', level: 92 },
        { name: 'HTML/CSS', level: 96 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Vue.js', level: 80 },
        { name: 'Sass/SCSS', level: 85 },
        { name: 'Bootstrap', level: 88 }
      ]
    },
    {
      title: 'Backend Development',
      icon: 'Server',
      color: 'bg-green-500',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Express.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Django/Flask', level: 82 },
        { name: 'PHP', level: 78 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 80 },
        { name: 'Microservices', level: 75 }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: 'Database',
      color: 'bg-purple-500',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'AWS', level: 80 },
        { name: 'Google Cloud', level: 75 },
        { name: 'Docker', level: 83 },
        { name: 'Redis', level: 78 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: 'Settings',
      color: 'bg-orange-500',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Webpack/Vite', level: 85 },
        { name: 'Jest/Testing', level: 80 },
        { name: 'CI/CD', level: 78 },
        { name: 'Figma', level: 88 },
        { name: 'Postman', level: 90 },
        { name: 'Linux', level: 85 }
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
      icon: 'Award'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2023',
      icon: 'Code'
    },
    {
      name: 'Full Stack JavaScript',
      issuer: 'freeCodeCamp',
      year: '2022',
      icon: 'Book'
    },
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      year: '2024',
      icon: 'BarChart'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities and the tools I use to 
            build exceptional digital experiences.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={category.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text-primary font-medium">{skill.name}</span>
                      <span className="text-text-secondary text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${category.color.replace('bg-', 'bg-')} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Certifications & Achievements
            </h3>
            <p className="text-text-secondary">
              Continuous learning and professional development milestones
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">{cert.name}</h4>
                <p className="text-text-secondary text-sm mb-1">{cert.issuer}</p>
                <p className="text-primary font-semibold text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Philosophy */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              My Technology Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={24} className="text-blue-600" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">Performance First</h4>
                <p className="text-text-secondary text-sm">
                  Every line of code is written with performance and scalability in mind.
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-green-600" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">Security Focused</h4>
                <p className="text-text-secondary text-sm">
                  Building secure applications with best practices and modern security standards.
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-purple-600" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">User-Centered</h4>
                <p className="text-text-secondary text-sm">
                  Technology should serve people, creating intuitive and accessible experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
