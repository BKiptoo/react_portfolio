import React from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalJourney = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Started My Journey',
      description: 'Began learning web development with HTML, CSS, and JavaScript during university',
      icon: 'Play',
      color: 'bg-blue-500'
    },
    {
      year: '2023',
      title: 'First Professional Role',
      description: 'Joined as Junior Developer at a local tech startup in Nairobi, focusing on React applications',
      icon: 'Briefcase',
      color: 'bg-green-500'
    },
    {
      year: '2024',
      title: 'Full-Stack Mastery',
      description: 'Expanded skills to include Node.js, databases, and cloud technologies through various projects',
      icon: 'Code',
      color: 'bg-purple-500'
    },
    {
      year: '2024',
      title: 'Mid-Level Developer',
      description: 'Promoted to Mid-Level Full-Stack Developer, leading development of e-commerce and fintech solutions',
      icon: 'TrendingUp',
      color: 'bg-orange-500'
    },
    {
      year: '2025',
      title: 'Freelance Success',
      description: 'Launched independent practice, serving clients across Kenya and internationally',
      icon: 'Globe',
      color: 'bg-pink-500'
    },
    {
      year: '2024',
      title: 'Innovation & Growth',
      description: 'Focusing on mobile-first solutions and fintech applications for the African market',
      icon: 'Rocket',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            My Professional Journey
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From curious beginner to experienced professional, here's how my career in 
            technology has evolved over the years.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:justify-between`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg z-10">
                  <div className={`w-3 h-3 ${milestone.color} rounded-full`}></div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 ${milestone.color} rounded-lg flex items-center justify-center`}>
                        <Icon name={milestone.icon} size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-text-primary">{milestone.title}</div>
                        <div className="text-sm text-primary font-semibold">{milestone.year}</div>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Year Badge (visible on mobile) */}
                <div className="md:hidden mt-2 ml-16">
                  <span className="inline-block bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {milestone.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Target" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Goal-Oriented</h3>
            <p className="text-text-secondary">
              Always focused on delivering results that exceed client expectations and drive business growth.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Lightbulb" size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Innovation-Driven</h3>
            <p className="text-text-secondary">
              Constantly exploring new technologies and methodologies to solve complex problems efficiently.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Team Player</h3>
            <p className="text-text-secondary">
              Experienced in collaborating with cross-functional teams to build exceptional products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
