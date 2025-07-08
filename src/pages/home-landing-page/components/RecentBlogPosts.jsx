import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const RecentBlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Modern Architecture",
      excerpt: "Learn how to structure large-scale React applications using modern patterns, state management solutions, and performance optimization techniques.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      category: "React",
      readTime: "8 min read",
      publishDate: "2024-01-15",
      author: "Bettson Kiptoo",
      tags: ["React", "Architecture", "Performance"]
    },
    {
      id: 2,
      title: "Mastering CSS Grid and Flexbox for Modern Layouts",
      excerpt: "A comprehensive guide to creating responsive, flexible layouts using CSS Grid and Flexbox with practical examples and best practices.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      category: "CSS",
      readTime: "6 min read",
      publishDate: "2024-01-10",
      author: "Bettson Kiptoo",
      tags: ["CSS", "Grid", "Flexbox", "Responsive"]
    },
    {
      id: 3,
      title: "Node.js Best Practices for Production Applications",
      excerpt: "Essential practices for building robust, secure, and scalable Node.js applications ready for production deployment.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      category: "Node.js",
      readTime: "10 min read",
      publishDate: "2024-01-05",
      author: "Bettson Kiptoo",
      tags: ["Node.js", "Backend", "Production", "Security"]
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const BlogCard = ({ post }) => (
    <article className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-text-secondary mb-3">
          <Icon name="Calendar" size={16} className="mr-2" />
          <span>{formatDate(post.publishDate)}</span>
          <span className="mx-2">•</span>
          <Icon name="Clock" size={16} className="mr-2" />
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-text-secondary mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-md hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <Icon name="User" size={16} className="text-primary" />
            </div>
            <span className="text-sm text-text-secondary">{post.author}</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => {
              // Navigate to blog post when implemented
              console.log(`Navigate to blog post: ${post.id}`);
            }}
          >
            Read More
          </Button>
        </div>
      </div>
    </article>
  );

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology trends, and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Featured Article */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Star" size={20} className="text-accent mr-2" />
                <span className="text-accent font-medium">Featured Article</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                The Future of Web Development: Trends to Watch in 2024
              </h3>
              <p className="text-text-secondary mb-6">
                Explore the emerging technologies, frameworks, and methodologies that are shaping the future of web development. From AI integration to new JavaScript frameworks, discover what's coming next.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Web Development", "AI", "JavaScript", "Future Tech"].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-text-secondary text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <Button
                variant="primary"
                iconName="BookOpen"
                iconPosition="right"
                onClick={() => {
                  // Navigate to featured article when implemented
                  console.log('Navigate to featured article');
                }}
              >
                Read Full Article
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Future of Web Development"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                <Icon name="TrendingUp" size={20} className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="FileText"
            iconPosition="right"
            onClick={() => {
              // Navigate to blog page when implemented
              console.log('Navigate to blog page');
            }}
          >
            View All Articles
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-card rounded-2xl p-8 text-center shadow-lg">
          <div className="max-w-md mx-auto">
            <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Stay Updated
            </h3>
            <p className="text-text-secondary mb-6">
              Subscribe to my newsletter for the latest articles, tutorials, and web development insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button
                variant="primary"
                iconName="Send"
                iconPosition="right"
                onClick={() => {
                  // Handle newsletter subscription
                  console.log('Subscribe to newsletter');
                }}
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-text-secondary mt-3">
              No spam, unsubscribe at any time. Privacy policy applies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;