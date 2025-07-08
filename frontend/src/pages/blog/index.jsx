import React, { useState, useMemo, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useNavigate } from 'react-router-dom';
import { fetchBlogs } from '../../services/blogService';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Mobile'];

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const postsPerPage = 6;

  useEffect(() => {
    fetchBlogs().then(setBlogs).catch(console.error);
  }, []);

  // Map backend blogs to the expected structure
  const blogPosts = useMemo(() =>
    blogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      excerpt: blog.content.length > 180 ? blog.content.slice(0, 180) + '...' : blog.content,
      content: blog.content,
      image: blog.image || '', // If you add image support to backend
      date: blog.created_at,
      author: blog.author,
      readTime: blog.readTime || '', // If you add readTime to backend
      category: blog.category || 'General', // If you add category to backend
      tags: blog.tags || [], // If you add tags to backend
      featured: blog.featured || false, // If you add featured to backend
      views: blog.views || 0, // If you add views to backend
    })),
    [blogs]
  );

  // Filter and search functionality
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, blogPosts]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const BlogCard = ({ post, featured = false }) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col ${featured ? 'md:col-span-2 md:flex-row' : ''}`}>
      {post.image && (
        <img 
          src={post.image} 
          alt={post.title} 
          className={`${featured ? 'md:w-1/2 md:rounded-l-xl md:rounded-tr-none' : ''} rounded-t-xl ${featured ? 'md:rounded-t-xl' : ''} h-48 ${featured ? 'md:h-auto' : ''} w-full object-cover`} 
        />
      )}
      <div className={`p-6 flex flex-col flex-1 ${featured ? 'md:w-1/2' : ''}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} className="text-primary" />
              <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
            )}
          </div>
          {featured && (
            <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
        {post.category && (
          <span className="inline-block bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
            {post.category}
          </span>
        )}
        <h2 className={`font-bold text-text-primary mb-3 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {post.title}
        </h2>
        <p className="text-text-secondary mb-4 flex-1 leading-relaxed">
          {post.excerpt}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Eye" size={16} className="text-gray-400" />
            <span className="text-sm text-gray-500">{post.views || 0} views</span>
          </div>
          <Button
            variant="secondary"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => handleReadMore(post.id)}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700">
                <Icon name="BookOpen" size={16} className="mr-2" />
                Blog & Insights
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Development{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-8">
              Explore articles, tutorials, and insights on web development, best practices, 
              and the latest trends in technology.
            </p>
            {/* Blog Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="FileText" size={20} className="text-primary" />
                <span className="text-text-secondary">{blogPosts.length} Articles</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={20} className="text-primary" />
                <span className="text-text-secondary">1000+ Readers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Tag" size={20} className="text-primary" />
                <span className="text-text-secondary">Multiple Topics</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 mb-8">
              <Icon name="Star" size={24} className="text-accent" />
              <h2 className="text-3xl font-bold text-text-primary">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <BlogCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Search and Filter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-6">All Articles</h2>
            {/* Search and Categories */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div className="relative flex-1 max-w-md">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="pl-10"
                />
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Search Results Info */}
          {(searchTerm || selectedCategory !== 'All') && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                {filteredPosts.length === 0 ? 'No articles found' : `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`}
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>
          )}
          {/* Blog Posts Grid */}
          {currentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </div>
          )}
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      currentPage === index + 1
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>
      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Icon name="Mail" size={48} className="mx-auto mb-4 text-white opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get the latest articles and tutorials delivered straight to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-gray-900"
            />
            <Button
              variant="secondary"
              size="lg"
              iconName="Send"
              iconPosition="right"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-primary-100 mt-4">
            No spam, unsubscribe at any time.
          </p>
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
                Full Stack Developer sharing insights, tutorials, and best practices 
                in web development and technology.
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
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.filter(cat => cat !== 'All').map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                    >
                      {category}
                    </button>
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

export default Blog; 