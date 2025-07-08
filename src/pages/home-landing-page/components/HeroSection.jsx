import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    // Navigate to projects section or page
    document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactMe = () => {
    navigate('/contact');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 mb-4">
                <Icon name="Code" size={16} className="mr-2" />
                Full Stack Developer
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Bettson Kiptoo
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
              I craft exceptional digital experiences through innovative web development, 
              turning complex ideas into elegant, user-friendly solutions that drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="primary" 
                size="lg"
                iconName="FolderOpen"
                iconPosition="right"
                onClick={handleViewProjects}
                className="transform hover:scale-105 transition-transform duration-200"
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Mail"
                iconPosition="right"
                onClick={handleContactMe}
                className="transform hover:scale-105 transition-transform duration-200"
              >
                Contact Me
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-text-secondary">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-text-secondary">Years Exp</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-text-secondary">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="./public/assets/images/profile.jpg"
                  alt="Bettson Kiptoo - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Icon name="Code2" size={24} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-text-secondary">
            <span className="text-sm mb-2">Scroll to explore</span>
            <Icon name="ChevronDown" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;