import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(null);

  const handleContactMe = () => {
    navigate('/contact');
  };

  const handleGetQuote = (serviceName) => {
    navigate('/contact', { state: { service: serviceName } });
  };

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: 'Globe',
      color: 'bg-blue-500',
      price: 'From $2,000',
      duration: '2-6 weeks',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Cross-browser Compatibility',
        'Content Management System',
        'Analytics Integration',
        'SSL Certificate Setup',
        'Mobile-first Approach'
      ],
      technologies: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'PHP', 'Laravel'],
      deliverables: [
        'Fully functional website',
        'Source code documentation',
        'Deployment setup',
        '30 days of support',
        'Training materials'
      ],
      process: [
        'Requirements gathering',
        'Design mockups',
        'Development phase',
        'Testing & QA',
        'Deployment & launch'
      ]
    },
    {
      id: 'react-applications',
      title: 'React Applications',
      icon: 'Code',
      color: 'bg-cyan-500',
      price: 'From $3,500',
      duration: '4-10 weeks',
      description: 'Interactive single-page applications and complex web apps using React.js ecosystem with modern state management.',
      features: [
        'Component-based Architecture',
        'State Management (Redux/Zustand)',
        'API Integration',
        'Real-time Features',
        'Progressive Web App (PWA)',
        'Authentication & Authorization',
        'Database Integration',
        'Custom Hooks & Components'
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'React Router', 'Tailwind CSS', 'Firebase'],
      deliverables: [
        'Production-ready React app',
        'Component library',
        'API documentation',
        'Testing suite',
        '60 days of support'
      ],
      process: [
        'Architecture planning',
        'Component design',
        'Development sprints',
        'Integration testing',
        'Performance optimization'
      ]
    },
    {
      id: 'backend-development',
      title: 'Backend Development',
      icon: 'Server',
      color: 'bg-green-500',
      price: 'From $2,500',
      duration: '3-8 weeks',
      description: 'Robust server-side applications, APIs, and database solutions for scalable and secure web applications.',
      features: [
        'RESTful API Development',
        'Database Design & Optimization',
        'Authentication Systems',
        'Payment Gateway Integration',
        'Real-time Communication',
        'Cloud Integration',
        'Security Implementation',
        'Performance Monitoring'
      ],
      technologies: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
      deliverables: [
        'Complete backend system',
        'API documentation',
        'Database schema',
        'Security audit report',
        '90 days of support'
      ],
      process: [
        'System architecture',
        'Database design',
        'API development',
        'Security implementation',
        'Load testing'
      ]
    },
    {
      id: 'ecommerce-solutions',
      title: 'E-commerce Solutions',
      icon: 'ShoppingCart',
      color: 'bg-purple-500',
      price: 'From $4,000',
      duration: '6-12 weeks',
      description: 'Complete e-commerce platforms with payment processing, inventory management, and admin dashboards.',
      features: [
        'Product Catalog Management',
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Order Management System',
        'Inventory Tracking',
        'Customer Account Portal',
        'Admin Dashboard',
        'Mobile Optimization'
      ],
      technologies: ['React', 'Node.js', 'Stripe/M-Pesa', 'MongoDB', 'Next.js', 'Tailwind CSS'],
      deliverables: [
        'Full e-commerce platform',
        'Admin panel',
        'Payment integration',
        'Mobile app (optional)',
        '120 days of support'
      ],
      process: [
        'Business requirements',
        'Platform architecture',
        'Payment setup',
        'Testing & security',
        'Go-live support'
      ]
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      icon: 'Smartphone',
      color: 'bg-pink-500',
      price: 'From $5,000',
      duration: '8-16 weeks',
      description: 'Cross-platform mobile applications using React Native for iOS and Android with native performance.',
      features: [
        'Cross-platform Development',
        'Native Performance',
        'Push Notifications',
        'Offline Functionality',
        'Device API Integration',
        'App Store Deployment',
        'Backend Integration',
        'Real-time Sync'
      ],
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'Node.js', 'MongoDB'],
      deliverables: [
        'iOS & Android apps',
        'App store listings',
        'Backend API',
        'User documentation',
        '180 days of support'
      ],
      process: [
        'Platform strategy',
        'UI/UX design',
        'Development phases',
        'Testing on devices',
        'Store submission'
      ]
    },
    {
      id: 'consulting',
      title: 'Technical Consulting',
      icon: 'Users',
      color: 'bg-orange-500',
      price: 'From $150/hour',
      duration: 'Flexible',
      description: 'Expert guidance on technology stack selection, architecture design, code reviews, and development best practices.',
      features: [
        'Technology Stack Selection',
        'Architecture Review',
        'Code Auditing',
        'Performance Analysis',
        'Security Assessment',
        'Team Training',
        'Project Planning',
        'Technical Documentation'
      ],
      technologies: ['Various based on project needs'],
      deliverables: [
        'Detailed assessment report',
        'Recommendations document',
        'Implementation roadmap',
        'Best practices guide',
        'Ongoing support'
      ],
      process: [
        'Current state analysis',
        'Requirements assessment',
        'Solution design',
        'Implementation plan',
        'Knowledge transfer'
      ]
    }
  ];

  const whyChooseMe = [
    {
      title: 'Proven Expertise',
      description: '4+ years of experience delivering successful projects across various industries',
      icon: 'Award',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Modern Technology',
      description: 'Using cutting-edge tools and frameworks to build future-ready solutions',
      icon: 'Zap',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Client-Focused',
      description: 'Transparent communication and regular updates throughout the project lifecycle',
      icon: 'Heart',
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Quality Assurance',
      description: 'Thorough testing and quality checks to ensure bug-free, performant applications',
      icon: 'Shield',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Post-Launch Support',
      description: 'Comprehensive support and maintenance to keep your applications running smoothly',
      icon: 'Headphones',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Local & Global',
      description: 'Based in Nairobi, Kenya, serving clients locally and internationally',
      icon: 'Globe',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, goals, and defining project scope',
      icon: 'Search'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Creating wireframes, mockups, and technical architecture plans',
      icon: 'Layers'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution using modern technologies and best practices',
      icon: 'Code'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing to ensure quality, performance, and security',
      icon: 'CheckCircle'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Launching your application and ensuring smooth go-live',
      icon: 'Rocket'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep you running',
      icon: 'Wrench'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Kenya',
      role: 'CEO',
      content: 'Bettson delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'David Mutua',
      company: 'Fintech Solutions',
      role: 'CTO',
      content: 'The React application Bettson built for us handles thousands of daily transactions flawlessly. His backend integration with M-Pesa was particularly impressive.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Grace Wanjiku',
      company: 'Digital Agency',
      role: 'Project Manager',
      content: 'Working with Bettson was a pleasure. He communicated clearly, met all deadlines, and delivered a website that our client absolutely loved.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700">
                <Icon name="Settings" size={16} className="mr-2" />
                Professional Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Digital Vision
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              From concept to deployment, I provide comprehensive web development services 
              to help businesses thrive in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
                <span className="text-text-secondary">50+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-primary" />
                <span className="text-text-secondary">24h Response Time</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} className="text-accent" />
                <span className="text-text-secondary">100% Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              My Services
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{service.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span>{service.price}</span>
                      <span>•</span>
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-text-primary mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <Icon name="Check" size={12} className="text-green-600" />
                        <span className="text-xs text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {service.features.length > 4 && (
                    <span className="text-xs text-primary cursor-pointer">
                      +{service.features.length - 4} more features
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveService(activeService === service.id ? null : service.id);
                    }}
                  >
                    {activeService === service.id ? 'Hide Details' : 'View Details'}
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    iconName="Mail"
                    iconPosition="right"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGetQuote(service.title);
                    }}
                  >
                    Get Quote
                  </Button>
                </div>

                {/* Expanded Details */}
                {activeService === service.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                    <div>
                      <h5 className="font-semibold text-text-primary mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-text-primary mb-2">What You Get:</h5>
                      <ul className="space-y-1">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-green-600" />
                            <span className="text-sm text-text-secondary">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-text-primary mb-2">Process:</h5>
                      <ol className="space-y-1">
                        {service.process.map((step, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span className="text-sm text-text-secondary">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Choose Me?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              What sets me apart in delivering exceptional digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseMe.map((reason, index) => (
              <div key={reason.title} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={reason.icon} size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{reason.title}</h3>
                <p className="text-text-secondary">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              My Development Process
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <Icon name={step.icon} size={20} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
                
                {/* Connector line (except for last item) */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-text-secondary">
              Testimonials from satisfied clients across various projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-text-secondary mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-text-secondary">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your requirements and create something amazing together. 
            Get in touch for a free consultation and project quote.
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
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="right"
              onClick={() => window.open('tel:+254742771316')}
              className="border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-200"
            >
              Call +254 742 771 316
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-primary-100">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span className="text-sm">Response within 24 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} />
              <span className="text-sm">Free initial consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span className="text-sm">100% confidential</span>
            </div>
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
                  { label: 'Skills', href: '/skills' },
                  { label: 'Services', href: '/services' },
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
                  'E-commerce Solutions',
                  'Mobile Apps',
                  'Technical Consulting'
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

export default Services;
