import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsOverview from './components/SkillsOverview';
import RecentBlogPosts from './components/RecentBlogPosts';
import ClientTestimonials from './components/ClientTestimonials';
import FloatingActionButton from './components/FloatingActionButton';

const HomeLandingPage = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Projects Section */}
        <FeaturedProjects />
        
        {/* Skills Overview Section */}
        <SkillsOverview />
        
        {/* Recent Blog Posts Section */}
        <RecentBlogPosts />
        
        {/* Client Testimonials Section */}
        <ClientTestimonials />
        
        {/* Floating Action Button */}
        <FloatingActionButton />
      </main>

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

export default HomeLandingPage;