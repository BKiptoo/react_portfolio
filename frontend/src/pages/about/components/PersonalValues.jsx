import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalValues = () => {
  const values = [
    {
      title: 'Quality Over Quantity',
      description: 'I believe in delivering exceptional work rather than rushing through projects. Every line of code is crafted with attention to detail and purpose.',
      icon: 'Star',
      color: 'bg-yellow-500'
    },
    {
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and I embrace that change. I\'m constantly learning new skills and staying updated with industry trends.',
      icon: 'BookOpen',
      color: 'bg-blue-500'
    },
    {
      title: 'Collaboration & Communication',
      description: 'Great software is built by great teams. I value clear communication, active listening, and collaborative problem-solving.',
      icon: 'MessageCircle',
      color: 'bg-green-500'
    },
    {
      title: 'User-First Approach',
      description: 'Every technical decision I make is guided by how it will impact the end user. Creating delightful experiences is my primary goal.',
      icon: 'Heart',
      color: 'bg-red-500'
    },
    {
      title: 'Innovation & Creativity',
      description: 'I love exploring new ways to solve problems and pushing the boundaries of what\'s possible with technology.',
      icon: 'Lightbulb',
      color: 'bg-purple-500'
    },
    {
      title: 'Integrity & Transparency',
      description: 'Honest communication about timelines, challenges, and capabilities builds trust and leads to better outcomes.',
      icon: 'Shield',
      color: 'bg-indigo-500'
    }
  ];

  const workingStyle = [
    {
      title: 'Agile Methodology',
      description: 'I embrace agile principles, focusing on iterative development and regular feedback loops.',
      icon: 'RefreshCw'
    },
    {
      title: 'Test-Driven Development',
      description: 'Writing tests first ensures code quality and reduces bugs in production.',
      icon: 'CheckCircle'
    },
    {
      title: 'Clean Code Practices',
      description: 'Code should be readable, maintainable, and self-documenting for future developers.',
      icon: 'Code'
    },
    {
      title: 'Responsive Design',
      description: 'Every application I build works seamlessly across all devices and screen sizes.',
      icon: 'Smartphone'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Values & Work Philosophy
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The principles that guide my work and the approach I take to every project 
            and collaboration.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={value.icon} size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Working Style */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              My Working Style
            </h3>
            <p className="text-text-secondary">
              How I approach development and project management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingStyle.map((style, index) => (
              <div key={style.title} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={style.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">{style.title}</h4>
                <p className="text-text-secondary text-sm">{style.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Mission */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Target" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              My Mission
            </h3>
            <p className="text-xl text-primary-100 leading-relaxed">
              To bridge the gap between complex technology and human needs by creating 
              digital solutions that are not only powerful and efficient, but also 
              intuitive and accessible to everyone. I believe that great software 
              should empower people and make their lives better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalValues;
