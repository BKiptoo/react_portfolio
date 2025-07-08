import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/bettsonkiptoo',
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/bettsonkiptoo',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/bettsonkiptoo',
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    {
      name: 'Email',
      icon: 'Mail',
      action: () => navigate('/contact'),
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSocialClick = (link) => {
    if (link.action) {
      link.action();
    } else {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
    setIsExpanded(false);
  };

  return (
    <>
      {/* Mobile FAB - Only visible on mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Social Links */}
          <div className={`absolute bottom-16 right-0 space-y-3 transition-all duration-300 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
            {socialLinks.map((link, index) => (
              <div
                key={link.name}
                className={`transform transition-all duration-300 ${
                  isExpanded ? 'scale-100' : 'scale-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => handleSocialClick(link)}
                  className={`w-12 h-12 rounded-full ${link.color} text-white shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110`}
                  aria-label={link.name}
                >
                  <Icon name={link.icon} size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Main FAB Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-14 h-14 bg-primary hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              isExpanded ? 'rotate-45' : 'rotate-0'
            }`}
            aria-label="Toggle social menu"
          >
            <Icon name={isExpanded ? 'X' : 'Share2'} size={24} />
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 w-12 h-12 bg-secondary-600 hover:bg-secondary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <Icon name="ArrowUp" size={20} />
      </button>

      {/* Desktop Sidebar Widget - Only visible on desktop */}
      <div className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="bg-card rounded-2xl shadow-xl p-4 border border-border">
          <div className="text-center mb-4">
            <h3 className="text-sm font-semibold text-text-primary mb-2">Connect</h3>
            <div className="w-8 h-px bg-primary mx-auto"></div>
          </div>
          
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleSocialClick(link)}
                className={`w-10 h-10 rounded-lg ${link.color} text-white flex items-center justify-center transition-all duration-200 hover:scale-110 group relative`}
                aria-label={link.name}
              >
                <Icon name={link.icon} size={18} />
                
                {/* Tooltip */}
                <div className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-text-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {link.name}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-text-primary"></div>
                </div>
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="text-center">
              <p className="text-xs text-text-secondary mb-2">Available for</p>
              <p className="text-xs font-medium text-primary">Freelance Projects</p>
              <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile when expanded */}
      {isExpanded && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default FloatingActionButton;