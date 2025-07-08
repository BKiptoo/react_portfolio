import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/bettson/ecommerce-platform",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Chart.js"],
      liveUrl: "https://demo-taskmanager.com",
      githubUrl: "https://github.com/bettson/task-manager",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, historical data visualization, and severe weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express", "PostgreSQL", "D3.js"],
      liveUrl: "https://demo-weather.com",
      githubUrl: "https://github.com/bettson/weather-dashboard",
      category: "Full Stack"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform with sentiment analysis, engagement tracking, and automated reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "Django", "TensorFlow"],
      liveUrl: "https://demo-analytics.com",
      githubUrl: "https://github.com/bettson/social-analytics",
      category: "Full Stack"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Educational platform with course management, progress tracking, interactive quizzes, and video streaming capabilities.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MySQL", "Socket.io"],
      liveUrl: "https://demo-lms.com",
      githubUrl: "https://github.com/bettson/lms-platform",
      category: "Full Stack"
    },
    {
      id: 6,
      title: "School Management System",
      description: "Comprehensive school management platform built with Laravel, featuring student enrollment, grade management, and parent-teacher communication.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      liveUrl: "https://demo-school-system.com",
      githubUrl: "https://github.com/bettson/school-management",
      category: "Backend"
    },
    {
      id: 7,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, smooth animations, and optimized performance for showcasing creative work.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "https://demo-portfolio.com",
      githubUrl: "https://github.com/bettson/portfolio-site",
      category: "Frontend"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button
            variant="primary"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => window.open(project.liveUrl, '_blank')}
            className="flex-1"
          >
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Github"
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="px-3"
          >
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="featured-projects" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore some of my recent work showcasing diverse technologies and creative solutions
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-2">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              aria-label="Previous project"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              aria-label="Next project"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-primary' : 'bg-secondary-300'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => {
              // Navigate to projects page when implemented
              console.log('Navigate to projects page');
            }}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;