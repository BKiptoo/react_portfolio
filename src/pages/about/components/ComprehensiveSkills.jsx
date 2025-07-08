import React from 'react';
import Icon from '../../../components/AppIcon';

const ComprehensiveSkills = () => {
  const technicalSkills = [
    {
      category: 'Frontend Technologies',
      icon: 'Monitor',
      color: 'bg-blue-500',
      skills: [
        { name: 'HTML5', level: 96, experience: '5+ years' },
        { name: 'CSS3/SCSS', level: 94, experience: '5+ years' },
        { name: 'JavaScript (ES6+)', level: 92, experience: '5+ years' },
        { name: 'TypeScript', level: 88, experience: '3+ years' },
        { name: 'React.js', level: 95, experience: '4+ years' },
        { name: 'Next.js', level: 88, experience: '2+ years' },
        { name: 'Vue.js', level: 80, experience: '2+ years' },
        { name: 'Tailwind CSS', level: 90, experience: '3+ years' },
        { name: 'Bootstrap', level: 88, experience: '4+ years' },
        { name: 'Material-UI', level: 85, experience: '2+ years' },
        { name: 'Framer Motion', level: 80, experience: '1+ year' },
        { name: 'Redux/Zustand', level: 85, experience: '3+ years' }
      ]
    },
    {
      category: 'Backend Technologies',
      icon: 'Server',
      color: 'bg-green-500',
      skills: [
        { name: 'Node.js', level: 93, experience: '4+ years' },
        { name: 'Express.js', level: 90, experience: '4+ years' },
        { name: 'Python', level: 85, experience: '3+ years' },
        { name: 'Django', level: 82, experience: '2+ years' },
        { name: 'Flask', level: 80, experience: '2+ years' },
        { name: 'PHP', level: 78, experience: '2+ years' },
        { name: 'REST APIs', level: 95, experience: '4+ years' },
        { name: 'GraphQL', level: 80, experience: '2+ years' },
        { name: 'Socket.io', level: 75, experience: '1+ year' },
        { name: 'JWT Authentication', level: 88, experience: '3+ years' },
        { name: 'Microservices', level: 75, experience: '1+ year' },
        { name: 'API Integration', level: 92, experience: '4+ years' }
      ]
    },
    {
      category: 'Databases & Storage',
      icon: 'Database',
      color: 'bg-purple-500',
      skills: [
        { name: 'MongoDB', level: 88, experience: '3+ years' },
        { name: 'MySQL', level: 85, experience: '4+ years' },
        { name: 'PostgreSQL', level: 82, experience: '2+ years' },
        { name: 'SQLite', level: 80, experience: '3+ years' },
        { name: 'Redis', level: 78, experience: '1+ year' },
        { name: 'Firebase Firestore', level: 85, experience: '2+ years' },
        { name: 'Supabase', level: 75, experience: '1+ year' },
        { name: 'Prisma ORM', level: 80, experience: '1+ year' },
        { name: 'Mongoose', level: 85, experience: '3+ years' },
        { name: 'Database Design', level: 88, experience: '4+ years' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: 'Cloud',
      color: 'bg-orange-500',
      skills: [
        { name: 'AWS (EC2, S3, Lambda)', level: 80, experience: '2+ years' },
        { name: 'Google Cloud Platform', level: 75, experience: '1+ year' },
        { name: 'Heroku', level: 88, experience: '3+ years' },
        { name: 'Netlify', level: 90, experience: '3+ years' },
        { name: 'Vercel', level: 92, experience: '2+ years' },
        { name: 'Docker', level: 83, experience: '2+ years' },
        { name: 'CI/CD (GitHub Actions)', level: 78, experience: '2+ years' },
        { name: 'DigitalOcean', level: 80, experience: '2+ years' },
        { name: 'Firebase Hosting', level: 85, experience: '2+ years' },
        { name: 'Domain & DNS Management', level: 85, experience: '3+ years' }
      ]
    },
    {
      category: 'Tools & Workflow',
      icon: 'Settings',
      color: 'bg-indigo-500',
      skills: [
        { name: 'Git & GitHub', level: 95, experience: '5+ years' },
        { name: 'VS Code', level: 98, experience: '5+ years' },
        { name: 'Webpack', level: 82, experience: '2+ years' },
        { name: 'Vite', level: 88, experience: '2+ years' },
        { name: 'npm/yarn', level: 92, experience: '4+ years' },
        { name: 'Postman/Insomnia', level: 90, experience: '4+ years' },
        { name: 'Figma', level: 88, experience: '3+ years' },
        { name: 'Chrome DevTools', level: 90, experience: '4+ years' },
        { name: 'ESLint/Prettier', level: 85, experience: '3+ years' },
        { name: 'Jest/Testing Library', level: 80, experience: '2+ years' },
        { name: 'Jira/Trello', level: 88, experience: '3+ years' },
        { name: 'Slack/Discord', level: 95, experience: '4+ years' }
      ]
    },
    {
      category: 'Mobile & Additional',
      icon: 'Smartphone',
      color: 'bg-pink-500',
      skills: [
        { name: 'React Native', level: 75, experience: '1+ year' },
        { name: 'Progressive Web Apps', level: 82, experience: '2+ years' },
        { name: 'Responsive Design', level: 95, experience: '4+ years' },
        { name: 'Web Accessibility', level: 85, experience: '2+ years' },
        { name: 'SEO Optimization', level: 88, experience: '3+ years' },
        { name: 'Performance Optimization', level: 85, experience: '3+ years' },
        { name: 'Web Security', level: 80, experience: '2+ years' },
        { name: 'Payment Integration (M-Pesa, Stripe)', level: 85, experience: '2+ years' },
        { name: 'Email Templates', level: 88, experience: '3+ years' },
        { name: 'Technical Writing', level: 90, experience: '4+ years' }
      ]
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95, icon: 'Lightbulb' },
    { name: 'Communication', level: 92, icon: 'MessageCircle' },
    { name: 'Team Collaboration', level: 90, icon: 'Users' },
    { name: 'Project Management', level: 85, icon: 'CheckCircle' },
    { name: 'Time Management', level: 88, icon: 'Clock' },
    { name: 'Adaptability', level: 92, icon: 'RefreshCw' },
    { name: 'Leadership', level: 83, icon: 'UserCheck' },
    { name: 'Client Relations', level: 90, icon: 'Heart' }
  ];

  const certifications = [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
      status: 'Active',
      icon: 'Award',
      color: 'bg-orange-500'
    },
    {
      name: 'Meta React Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      year: '2023',
      status: 'Active',
      icon: 'Code',
      color: 'bg-blue-500'
    },
    {
      name: 'Full Stack JavaScript Developer',
      issuer: 'freeCodeCamp',
      year: '2022',
      status: 'Active',
      icon: 'Book',
      color: 'bg-green-500'
    },
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      year: '2024',
      status: 'Active',
      icon: 'BarChart',
      color: 'bg-yellow-500'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2023',
      status: 'Active',
      icon: 'Database',
      color: 'bg-green-600'
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2021',
      status: 'Active',
      icon: 'Smartphone',
      color: 'bg-purple-500'
    }
  ];

  const languages = [
    { name: 'English', level: 'Native/Fluent', flag: '🇺🇸' },
    { name: 'Swahili', level: 'Native/Fluent', flag: '🇰🇪' },
    { name: 'Kalenjin', level: 'Native/Fluent', flag: '🇰🇪' },
    { name: 'French', level: 'Conversational', flag: '🇫🇷' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities, certifications, and 
            professional skills developed over 5+ years of experience.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-12 mb-16">
          {technicalSkills.map((category, categoryIndex) => (
            <div key={category.category} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center`}>
                  <Icon name={category.icon} size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">{category.category}</h3>
                  <p className="text-text-secondary">{category.skills.length} technologies</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-text-primary">{skill.name}</h4>
                        <p className="text-xs text-text-secondary">{skill.experience}</p>
                      </div>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">Soft Skills</h3>
            <p className="text-text-secondary">Essential skills for successful project delivery and team collaboration</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div key={skill.name} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={skill.icon} size={20} className="text-primary" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">{skill.name}</h4>
                <div className="text-sm text-text-secondary mb-3">{skill.level}%</div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="h-1.5 bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">Languages</h3>
            <p className="text-text-secondary">Multilingual communication capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {languages.map((language, index) => (
              <div key={language.name} className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">{language.flag}</div>
                <h4 className="font-bold text-text-primary">{language.name}</h4>
                <p className="text-sm text-text-secondary">{language.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Professional Certifications
            </h3>
            <p className="text-text-secondary">
              Industry-recognized certifications demonstrating expertise and commitment to continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={cert.icon} size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-primary text-sm mb-1">{cert.name}</h4>
                    <p className="text-xs text-text-secondary mb-2">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-primary font-semibold">{cert.year}</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Skills Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={24} className="text-blue-600" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">Continuous Learning</h4>
                <p className="text-text-secondary text-sm">
                  Technology evolves rapidly. I stay current with the latest trends and best practices.
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={24} className="text-green-600" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">Quality Focus</h4>
                <p className="text-text-secondary text-sm">
                  Every project is an opportunity to deliver exceptional quality and exceed expectations.
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

export default ComprehensiveSkills;
