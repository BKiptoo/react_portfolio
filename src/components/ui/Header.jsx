import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Home', path: '/home-landing-page', icon: 'Home' },
    { label: 'About', path: '/about', icon: 'User' },
    // { label: 'Projects', path: '/projects', icon: 'FolderOpen' },
    { label: 'Skills', path: '/skills', icon: 'Code' },
    // { label: 'Experience', path: '/experience', icon: 'Briefcase' },
    { label: 'Services', path: '/services', icon: 'Settings' },
    // { label: 'Blog', path: '/blog', icon: 'FileText' },
    { label: 'Contact', path: '/contact', icon: 'Mail' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/BKiptoo' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/bettson-k-ab023a301/' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const Logo = () => (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">B</span>
      </div>
      <span className="text-xl font-bold text-text-primary">Bettson</span>
    </div>
  );

  return (
    <>
      <header className={`sticky-nav ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer"
              onClick={() => handleNavigation('/home-landing-page')}
            >
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`nav-link ${isActiveRoute(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop Social Links */}
            <div className="hidden lg:flex items-center space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-md text-text-primary hover:bg-surface transition-colors duration-200 hamburger ${isMenuOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Logo />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-text-primary hover:bg-surface transition-colors duration-200"
              aria-label="Close menu"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                    isActiveRoute(item.path)
                      ? 'bg-primary/10 text-primary' :'text-text-secondary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile Social Links */}
          <div className="px-6 py-6 border-t border-border">
            <div className="flex items-center justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;