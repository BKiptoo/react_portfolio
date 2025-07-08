import React from 'react';
import Header from '../../components/ui/Header';
import PersonalIntro from './components/PersonalIntro';
import ProfessionalJourney from './components/ProfessionalJourney';
import ComprehensiveSkills from './components/ComprehensiveSkills';
import PersonalValues from './components/PersonalValues';
import EducationCertifications from './components/EducationCertifications';
import HobbiesInterests from './components/HobbiesInterests';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleContactMe = () => {
    navigate('/contact');
  };

  const handleViewProjects = () => {
    navigate('/projects');
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
                <Icon name="User" size={16} className="mr-2" />
                About Me
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Get to Know{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Bettson Kiptoo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              A passionate full-stack developer dedicated to crafting exceptional digital experiences 
              through innovative technology solutions and user-centered design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={20} className="text-primary" />
                <span className="text-text-secondary">Based in Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Code" size={20} className="text-primary" />
                <span className="text-text-secondary">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Coffee" size={20} className="text-primary" />
                <span className="text-text-secondary">Coffee Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <PersonalIntro />

      {/* Professional Journey */}
      <ProfessionalJourney />

      {/* Technical Skills */}
      <ComprehensiveSkills />

      {/* Personal Values & Approach */}
      <PersonalValues />

      {/* Education & Certifications */}
      <EducationCertifications />

      {/* Hobbies & Interests */}
      <HobbiesInterests />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with passionate people. 
            Whether you have an idea or need technical expertise, let's connect!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="secondary"
              size="lg"
              iconName="Mail"
              iconPosition="right"
              onClick={handleContactMe}
              className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="FolderOpen"
              iconPosition="right"
              onClick={handleViewProjects}
              className="border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </Button>
          </div>
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
                  { label: 'Projects', href: '/projects' },
                  { label: 'Blog', href: '/blog' },
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

export default About;
