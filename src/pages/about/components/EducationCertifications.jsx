import React from 'react';
import Icon from '../../../components/AppIcon';

const EducationCertifications = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Nairobi',
      period: '2016 - 2020',
      description: 'Focused on software engineering, algorithms, and data structures. Graduated with First Class Honors.',
      icon: 'GraduationCap',
      color: 'bg-blue-600'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Moringa School',
      period: '2019',
      description: 'Intensive 14-week program covering modern web development technologies and best practices.',
      icon: 'Code',
      color: 'bg-green-600'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      issued: 'March 2023',
      expires: 'March 2026',
      credentialId: 'AWS-DEV-2023-001',
      icon: 'Cloud',
      color: 'bg-orange-500'
    },
    {
      name: 'Meta React Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      issued: 'September 2022',
      expires: 'Never',
      credentialId: 'META-REACT-2022-456',
      icon: 'Monitor',
      color: 'bg-blue-500'
    },
    {
      name: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      issued: 'June 2023',
      expires: 'June 2025',
      credentialId: 'GCP-ARCH-2023-789',
      icon: 'Server',
      color: 'bg-red-500'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      issued: 'January 2023',
      expires: 'Never',
      credentialId: 'MONGO-DEV-2023-123',
      icon: 'Database',
      color: 'bg-green-500'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      issued: 'November 2021',
      expires: 'Never',
      credentialId: 'FCC-JS-2021-987',
      icon: 'Code',
      color: 'bg-yellow-500'
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      issued: 'August 2021',
      expires: 'Never',
      credentialId: 'FCC-RWD-2021-654',
      icon: 'Smartphone',
      color: 'bg-purple-500'
    }
  ];

  const continuingEducation = [
    {
      title: 'Advanced React Patterns',
      platform: 'Pluralsight',
      completed: '2024',
      icon: 'BookOpen'
    },
    {
      title: 'Microservices Architecture',
      platform: 'Udemy',
      completed: '2024',
      icon: 'Layers'
    },
    {
      title: 'System Design Interview',
      platform: 'Coursera',
      completed: '2023',
      icon: 'Cpu'
    },
    {
      title: 'DevOps and CI/CD',
      platform: 'edX',
      completed: '2023',
      icon: 'GitBranch'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My formal education background and professional certifications that demonstrate 
            my commitment to continuous learning and expertise.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={edu.degree} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${edu.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={edu.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-text-primary mb-1">{edu.degree}</h4>
                    <div className="text-primary font-semibold mb-1">{edu.institution}</div>
                    <div className="text-text-secondary text-sm mb-2">{edu.period}</div>
                    <p className="text-text-secondary text-sm">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-3 mb-4">
                  <div className={`w-10 h-10 ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={cert.icon} size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-primary text-sm leading-tight mb-1">{cert.name}</h4>
                    <div className="text-primary text-xs font-semibold">{cert.issuer}</div>
                  </div>
                </div>
                <div className="space-y-1 text-xs text-text-secondary">
                  <div><span className="font-medium">Issued:</span> {cert.issued}</div>
                  <div><span className="font-medium">Expires:</span> {cert.expires}</div>
                  <div><span className="font-medium">ID:</span> {cert.credentialId}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuing Education */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Continuing Education
            </h3>
            <p className="text-text-secondary">
              Recent courses and learning initiatives to stay current with technology trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {continuingEducation.map((course, index) => (
              <div key={course.title} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={course.icon} size={20} className="text-primary" />
                </div>
                <h4 className="font-bold text-text-primary text-sm mb-1">{course.title}</h4>
                <div className="text-text-secondary text-xs mb-1">{course.platform}</div>
                <div className="text-primary text-xs font-semibold">{course.completed}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <Icon name="TrendingUp" size={16} className="text-primary" />
              <span className="text-text-primary font-medium text-sm">
                Always learning and growing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
