import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const handleContactMe = () => {
    navigate('/contact');
  };

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: 'Monitor',
      color: 'bg-blue-500',
      description: 'Building beautiful, responsive user interfaces',
      skills: [
        { name: 'HTML5', level: 96, experience: '5+ years', category: 'Markup' },
        { name: 'CSS3/SCSS', level: 94, experience: '5+ years', category: 'Styling' },
        { name: 'JavaScript (ES6+)', level: 92, experience: '5+ years', category: 'Programming' },
        { name: 'TypeScript', level: 88, experience: '3+ years', category: 'Programming' },
        { name: 'React.js', level: 95, experience: '4+ years', category: 'Framework' },
        { name: 'Next.js', level: 88, experience: '2+ years', category: 'Framework' },
        { name: 'Vue.js', level: 80, experience: '2+ years', category: 'Framework' },
        { name: 'Tailwind CSS', level: 90, experience: '3+ years', category: 'Styling' },
        { name: 'Bootstrap', level: 88, experience: '4+ years', category: 'Styling' },
        { name: 'Material-UI', level: 85, experience: '2+ years', category: 'UI Library' },
        { name: 'Framer Motion', level: 80, experience: '1+ year', category: 'Animation' },
        { name: 'Redux/Zustand', level: 85, experience: '3+ years', category: 'State Management' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: 'Server',
      color: 'bg-green-500',
      description: 'Creating robust server-side applications and APIs',
      skills: [
        { name: 'Node.js', level: 93, experience: '4+ years', category: 'Runtime' },
        { name: 'Express.js', level: 90, experience: '4+ years', category: 'Framework' },
        { name: 'Python', level: 85, experience: '3+ years', category: 'Programming' },
        { name: 'Django', level: 82, experience: '2+ years', category: 'Framework' },
        { name: 'Flask', level: 80, experience: '2+ years', category: 'Framework' },
        { name: 'PHP', level: 78, experience: '2+ years', category: 'Programming' },
        { name: 'REST APIs', level: 95, experience: '4+ years', category: 'API' },
        { name: 'GraphQL', level: 80, experience: '2+ years', category: 'API' },
        { name: 'Socket.io', level: 75, experience: '1+ year', category: 'Real-time' },
        { name: 'JWT Authentication', level: 88, experience: '3+ years', category: 'Security' },
        { name: 'Microservices', level: 75, experience: '1+ year', category: 'Architecture' },
        { name: 'API Integration', level: 92, experience: '4+ years', category: 'Integration' }
      ]
    },
    {
      id: 'database',
      title: 'Databases & Storage',
      icon: 'Database',
      color: 'bg-purple-500',
      description: 'Managing data with various database technologies',
      skills: [
        { name: 'MongoDB', level: 88, experience: '3+ years', category: 'NoSQL' },
        { name: 'MySQL', level: 85, experience: '4+ years', category: 'SQL' },
        { name: 'PostgreSQL', level: 82, experience: '2+ years', category: 'SQL' },
        { name: 'SQLite', level: 80, experience: '3+ years', category: 'SQL' },
        { name: 'Redis', level: 78, experience: '1+ year', category: 'Cache' },
        { name: 'Firebase Firestore', level: 85, experience: '2+ years', category: 'NoSQL' },
        { name: 'Supabase', level: 75, experience: '1+ year', category: 'BaaS' },
        { name: 'Prisma ORM', level: 80, experience: '1+ year', category: 'ORM' },
        { name: 'Mongoose', level: 85, experience: '3+ years', category: 'ODM' },
        { name: 'Database Design', level: 88, experience: '4+ years', category: 'Design' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: 'Cloud',
      color: 'bg-orange-500',
      description: 'Deploying and managing applications in the cloud',
      skills: [
        { name: 'AWS (EC2, S3, Lambda)', level: 80, experience: '2+ years', category: 'Cloud Platform' },
        { name: 'Google Cloud Platform', level: 75, experience: '1+ year', category: 'Cloud Platform' },
        { name: 'Heroku', level: 88, experience: '3+ years', category: 'PaaS' },
        { name: 'Netlify', level: 90, experience: '3+ years', category: 'Hosting' },
        { name: 'Vercel', level: 92, experience: '2+ years', category: 'Hosting' },
        { name: 'Docker', level: 83, experience: '2+ years', category: 'Containerization' },
        { name: 'CI/CD (GitHub Actions)', level: 78, experience: '2+ years', category: 'DevOps' },
        { name: 'DigitalOcean', level: 80, experience: '2+ years', category: 'Cloud Platform' },
        { name: 'Firebase Hosting', level: 85, experience: '2+ years', category: 'Hosting' },
        { name: 'Domain & DNS Management', level: 85, experience: '3+ years', category: 'Infrastructure' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Workflow',
      icon: 'Settings',
      color: 'bg-indigo-500',
      description: 'Development tools and workflow optimization',
      skills: [
        { name: 'Git & GitHub', level: 95, experience: '5+ years', category: 'Version Control' },
        { name: 'VS Code', level: 98, experience: '5+ years', category: 'IDE' },
        { name: 'Webpack', level: 82, experience: '2+ years', category: 'Build Tool' },
        { name: 'Vite', level: 88, experience: '2+ years', category: 'Build Tool' },
        { name: 'npm/yarn', level: 92, experience: '4+ years', category: 'Package Manager' },
        { name: 'Postman/Insomnia', level: 90, experience: '4+ years', category: 'API Testing' },
        { name: 'Figma', level: 88, experience: '3+ years', category: 'Design' },
        { name: 'Chrome DevTools', level: 90, experience: '4+ years', category: 'Debugging' },
        { name: 'ESLint/Prettier', level: 85, experience: '3+ years', category: 'Code Quality' },
        { name: 'Jest/Testing Library', level: 80, experience: '2+ years', category: 'Testing' },
        { name: 'Jira/Trello', level: 88, experience: '3+ years', category: 'Project Management' },
        { name: 'Linux/Terminal', level: 85, experience: '4+ years', category: 'OS' }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile & Specialized',
      icon: 'Smartphone',
      color: 'bg-pink-500',
      description: 'Mobile development and specialized technologies',
      skills: [
        { name: 'React Native', level: 75, experience: '1+ year', category: 'Mobile' },
        { name: 'Progressive Web Apps', level: 82, experience: '2+ years', category: 'Web' },
        { name: 'Responsive Design', level: 95, experience: '4+ years', category: 'Design' },
        { name: 'Web Accessibility (a11y)', level: 85, experience: '2+ years', category: 'Accessibility' },
        { name: 'SEO Optimization', level: 88, experience: '3+ years', category: 'SEO' },
        { name: 'Performance Optimization', level: 85, experience: '3+ years', category: 'Performance' },
        { name: 'Web Security', level: 80, experience: '2+ years', category: 'Security' },
        { name: 'Payment Integration (M-Pesa, Stripe)', level: 85, experience: '2+ years', category: 'Integration' },
        { name: 'Email Templates', level: 88, experience: '3+ years', category: 'Email' },
        { name: 'Technical Writing', level: 90, experience: '4+ years', category: 'Documentation' }
      ]
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95, icon: 'Lightbulb', description: 'Breaking down complex problems into manageable solutions' },
    { name: 'Communication', level: 92, icon: 'MessageCircle', description: 'Clear communication with clients and team members' },
    { name: 'Team Collaboration', level: 90, icon: 'Users', description: 'Working effectively in cross-functional teams' },
    { name: 'Project Management', level: 85, icon: 'CheckCircle', description: 'Managing timelines and deliverables efficiently' },
    { name: 'Time Management', level: 88, icon: 'Clock', description: 'Prioritizing tasks and meeting deadlines' },
    { name: 'Adaptability', level: 92, icon: 'RefreshCw', description: 'Quickly learning new technologies and adapting to changes' },
    { name: 'Leadership', level: 83, icon: 'UserCheck', description: 'Leading development teams and mentoring junior developers' },
    { name: 'Client Relations', level: 90, icon: 'Heart', description: 'Building strong relationships with clients and stakeholders' }
  ];

  const certifications = [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
      status: 'Active',
      icon: 'Award',
      color: 'bg-orange-500',
      description: 'Cloud computing fundamentals and AWS services'
    },
    {
      name: 'Meta React Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      year: '2023',
      status: 'Active',
      icon: 'Code',
      color: 'bg-blue-500',
      description: 'Advanced React development and best practices'
    },
    {
      name: 'Full Stack JavaScript Developer',
      issuer: 'freeCodeCamp',
      year: '2022',
      status: 'Active',
      icon: 'Book',
      color: 'bg-green-500',
      description: 'Comprehensive JavaScript full-stack development'
    },
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      year: '2024',
      status: 'Active',
      icon: 'BarChart',
      color: 'bg-yellow-500',
      description: 'Web analytics and performance measurement'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2023',
      status: 'Active',
      icon: 'Database',
      color: 'bg-green-600',
      description: 'MongoDB database design and development'
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2021',
      status: 'Active',
      icon: 'Smartphone',
      color: 'bg-purple-500',
      description: 'Modern responsive web design principles'
    }
  ];

  const languages = [
    { name: 'English', level: 'Native/Fluent', flag: '🇺🇸', proficiency: 100 },
    { name: 'Swahili', level: 'Native/Fluent', flag: '🇰🇪', proficiency: 100 },
    { name: 'Kalenjin', level: 'Native/Fluent', flag: '🇰🇪', proficiency: 100 },
    { name: 'French', level: 'Conversational', flag: '🇫🇷', proficiency: 65 }
  ];

  const categories = [
    { id: 'all', label: 'All Skills', icon: 'Grid' },
    { id: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { id: 'backend', label: 'Backend', icon: 'Server' },
    { id: 'database', label: 'Database', icon: 'Database' },
    { id: 'cloud', label: 'Cloud', icon: 'Cloud' },
    { id: 'tools', label: 'Tools', icon: 'Settings' },
    { id: 'mobile', label: 'Mobile', icon: 'Smartphone' }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700">
                <Icon name="Code" size={16} className="mr-2" />
                Technical Skills
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              My{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Technical Expertise
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              A comprehensive overview of my technical skills, tools, and technologies I use to 
              build exceptional digital experiences. From frontend to backend, cloud to mobile.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} className="text-primary" />
                <span className="text-text-secondary">6+ Certifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Code" size={20} className="text-primary" />
                <span className="text-text-secondary">66+ Technologies</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={20} className="text-primary" />
                <span className="text-text-secondary">5+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon name={category.icon} size={16} className="mr-2" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={category.id} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center`}>
                    <Icon name={category.icon} size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">{category.title}</h3>
                    <p className="text-text-secondary">{category.description}</p>
                    <span className="text-sm text-primary font-semibold">{category.skills.length} skills</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-text-primary">{skill.name}</h4>
                          <p className="text-xs text-text-secondary">{skill.experience} • {skill.category}</p>
                        </div>
                        <span className="text-sm font-bold text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Soft Skills & Professional Qualities
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Essential skills for successful project delivery and effective collaboration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div key={skill.name} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={skill.icon} size={20} className="text-primary" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">{skill.name}</h4>
                <p className="text-xs text-text-secondary mb-3">{skill.description}</p>
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
      </section>

      {/* Languages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Languages
            </h2>
            <p className="text-xl text-text-secondary">
              Multilingual communication for global collaboration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <div key={language.name} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{language.flag}</div>
                <h4 className="font-bold text-text-primary mb-2">{language.name}</h4>
                <p className="text-sm text-text-secondary mb-3">{language.level}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${language.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Professional Certifications
            </h2>
            <p className="text-xl text-text-secondary">
              Industry-recognized certifications validating my expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={cert.icon} size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-primary mb-1">{cert.name}</h4>
                    <p className="text-sm text-text-secondary mb-2">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary font-semibold">{cert.year}</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Philosophy */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My Skills Philosophy
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Technology is constantly evolving, and so am I. My approach to skills development 
            focuses on building strong fundamentals while staying adaptable to new innovations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <h4 className="font-bold mb-2">Continuous Learning</h4>
              <p className="text-primary-100 text-sm">
                I dedicate time each week to learning new technologies and improving existing skills.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} className="text-white" />
              </div>
              <h4 className="font-bold mb-2">Quality Focus</h4>
              <p className="text-primary-100 text-sm">
                Deep understanding of fundamentals leads to better problem-solving and code quality.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h4 className="font-bold mb-2">Practical Application</h4>
              <p className="text-primary-100 text-sm">
                Skills are only valuable when applied to solve real-world problems effectively.
              </p>
            </div>
          </div>

          <Button
            variant="secondary"
            size="lg"
            iconName="Mail"
            iconPosition="right"
            onClick={handleContactMe}
            className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
          >
            Let's Work Together
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-xl font-bold">Bettson Kiptoo</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Full Stack Developer passionate about creating exceptional digital experiences 
                through innovative web development solutions.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: 'Github', url: 'https://github.com' },
                  { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com' },
                  { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
                  { name: 'Email', icon: 'Mail', url: 'mailto:bettsonk@gmail.com' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <span className="text-sm">📧</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '/home-landing-page' },
                  { label: 'About', href: '/about' },
                  { label: 'Skills', href: '/skills' },
                  { label: 'Projects', href: '/projects' },
                  { label: 'Contact', href: '/contact' }
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  'Web Development',
                  'React Applications',
                  'Backend Development',
                  'UI/UX Design',
                  'Consulting'
                ].map((service) => (
                  <li key={service}>
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bettson Kiptoo. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Skills;
