import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HobbiesInterests = () => {
  const hobbies = [
    {
      title: 'Coffee Brewing',
      description: 'Exploring different brewing methods with premium Kenyan coffee. Living in the coffee capital of Africa has its perks!',
      icon: 'Coffee',
      color: 'bg-amber-600',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=200&fit=crop'
    },
    {
      title: 'Mountain Hiking',
      description: 'Exploring the beautiful landscapes of Kenya, from Mount Kenya to the Aberdare Ranges.',
      icon: 'Mountain',
      color: 'bg-green-600',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop'
    },
    {
      title: 'Photography',
      description: 'Capturing the vibrant culture and beautiful wildlife of Kenya, specializing in street and nature photography.',
      icon: 'Camera',
      color: 'bg-purple-600',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop'
    },
    {
      title: 'Open Source',
      description: 'Contributing to open source projects and mentoring upcoming developers in the Kenyan tech community.',
      icon: 'Github',
      color: 'bg-gray-800',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop'
    },
    {
      title: 'Football',
      description: 'Playing and watching football (soccer). Passionate supporter of Harambee Stars and Arsenal FC.',
      icon: 'Target',
      color: 'bg-indigo-600',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=200&fit=crop'
    },
    {
      title: 'Cooking',
      description: 'Experimenting with traditional Kenyan cuisine and international dishes. Perfecting my ugali and nyama choma skills.',
      icon: 'Utensils',
      color: 'bg-red-600',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop'
    }
  ];

  const interests = [
    {
      title: 'Artificial Intelligence',
      description: 'Exploring how AI can enhance web development and create better user experiences.',
      icon: 'Brain'
    },
    {
      title: 'Sustainable Technology',
      description: 'Building efficient, eco-friendly applications that minimize environmental impact.',
      icon: 'Leaf'
    },
    {
      title: 'User Experience Design',
      description: 'Understanding psychology behind user interactions and designing intuitive interfaces.',
      icon: 'Users'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Learning about decentralized technologies and their potential applications.',
      icon: 'Link'
    },
    {
      title: 'Tech Mentoring',
      description: 'Helping junior developers grow their skills and navigate their career paths.',
      icon: 'UserCheck'
    },
    {
      title: 'Startups & Innovation',
      description: 'Following emerging tech trends and supporting innovative startup ecosystems.',
      icon: 'Zap'
    }
  ];

  const funFacts = [
    {
      fact: 'I can make perfect ugali from scratch',
      icon: 'Utensils'
    },
    {
      fact: 'I\'ve visited all 47 counties in Kenya',
      icon: 'MapPin'
    },
    {
      fact: 'I speak 4 languages: English, Swahili, Kalenjin, and basic French',
      icon: 'MessageSquare'
    },
    {
      fact: 'I once coded for 12 hours straight during a hackathon',
      icon: 'Clock'
    },
    {
      fact: 'My first line of code was "Hello World" in Python',
      icon: 'Code'
    },
    {
      fact: 'I have a collection of Kenyan coffee from different regions',
      icon: 'Coffee'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Beyond the Code
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            When I'm not coding, you'll find me pursuing various hobbies and interests 
            that keep me inspired and balanced.
          </p>
        </div>

        {/* Hobbies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Hobbies & Passions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <div key={hobby.title} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-10 h-10 ${hobby.color} rounded-lg flex items-center justify-center`}>
                      <Icon name={hobby.icon} size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-text-primary mb-2">{hobby.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Interests */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Professional Interests</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div key={interest.title} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={interest.icon} size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-primary mb-2">{interest.title}</h4>
                    <p className="text-text-secondary text-sm">{interest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Fun Facts About Me</h3>
            <p className="text-primary-100">
              Some random and interesting things you might want to know
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((item, index) => (
              <div key={item.fact} className="flex items-center space-x-3 bg-white bg-opacity-10 rounded-lg p-4">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={16} className="text-white" />
                </div>
                <p className="text-white text-sm font-medium">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Quote */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Quote" size={24} className="text-primary" />
            </div>
            <blockquote className="text-xl md:text-2xl text-text-primary font-medium italic mb-4">
              "Life is like coding - it's all about problem-solving, continuous learning, 
              and finding elegant solutions to complex challenges."
            </blockquote>
            <cite className="text-text-secondary">- Bettson Kiptoo</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesInterests;
