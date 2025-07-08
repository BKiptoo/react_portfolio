import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      testimonial: `Bettson delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail, technical expertise, and ability to understand our business needs made the entire process smooth and efficient. The final product was delivered on time and within budget.`,
      project: "E-commerce Platform Development",
      completionDate: "December 2023"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "DataFlow Solutions",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      testimonial: `Working with Bettson was a game-changer for our startup. He transformed our complex data visualization requirements into an intuitive, user-friendly dashboard. His React expertise and problem-solving skills are truly impressive. Highly recommended!`,
      project: "Analytics Dashboard",
      completionDate: "November 2023"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "EduTech Pro",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      testimonial: `Bettson's work on our learning management system was outstanding. He not only delivered high-quality code but also provided valuable insights that improved our user experience. His communication throughout the project was excellent, and he met every deadline.`,
      project: "Learning Management System",
      completionDate: "October 2023"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder",
      company: "HealthCare Connect",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      testimonial: `Bettson built our patient management system with incredible precision and care. His understanding of healthcare requirements and ability to implement secure, HIPAA-compliant solutions was exactly what we needed. The system has improved our efficiency significantly.`,
      project: "Patient Management System",
      completionDate: "September 2023"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Marketing Director",
      company: "Creative Agency Plus",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 5,
      testimonial: `Our new portfolio website created by Bettson has received countless compliments from clients. The design is modern, responsive, and perfectly captures our brand identity. His technical skills combined with design sensibility make him a rare find in the development world.`,
      project: "Portfolio Website Redesign",
      completionDate: "August 2023"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            What clients say about working with me and the results we've achieved together
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-50 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={32} className="text-primary" />
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg lg:text-xl text-text-primary text-center mb-8 leading-relaxed">
                "{currentTestimonialData.testimonial}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(currentTestimonialData.rating)}
                </div>
              </div>

              {/* Client Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-200">
                    <Image
                      src={currentTestimonialData.avatar}
                      alt={currentTestimonialData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-text-primary">
                      {currentTestimonialData.name}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {currentTestimonialData.position} at {currentTestimonialData.company}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-12 bg-border"></div>

                <div className="text-center sm:text-left">
                  <p className="text-sm font-medium text-text-primary">
                    {currentTestimonialData.project}
                  </p>
                  <p className="text-text-secondary text-sm">
                    Completed: {currentTestimonialData.completionDate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-surface hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors duration-200 shadow-md"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" size={20} className="text-text-primary hover:text-primary" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? 'bg-primary scale-125' :'bg-secondary-300 hover:bg-secondary-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-surface hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors duration-200 shadow-md"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" size={20} className="text-text-primary hover:text-primary" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed", icon: "CheckCircle" },
            { number: "25+", label: "Happy Clients", icon: "Users" },
            { number: "5+", label: "Years Experience", icon: "Calendar" },
            { number: "100%", label: "Client Satisfaction", icon: "Star" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-text-primary mb-2">{stat.number}</div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Join the list of satisfied clients who have transformed their ideas into successful digital solutions. Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  // Navigate to contact page
                  window.location.href = '/contact';
                }}
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium"
              >
                Get Started Today
              </button>
              <button
                onClick={() => {
                  // Navigate to projects page
                  console.log('Navigate to projects page');
                }}
                className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary-50 transition-colors duration-200 font-medium"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;