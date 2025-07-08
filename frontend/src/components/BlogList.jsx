import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../services/blogService";
import Image from "./AppImage";
import Icon from "./AppIcon";
import Button from "./ui/Button";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs).catch(console.error);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!blogs.length) {
    return (
      <div className="py-16 text-center text-text-secondary">
        <Icon name="FileText" size={40} className="mx-auto mb-4 text-primary" />
        <p className="text-lg">No blog posts yet. Please check back later!</p>
      </div>
    );
  }

  return (
    <section className="py-8 bg-surface">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article key={blog.id} className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
            {/* If you add image support to the backend, uncomment below and use blog.image */}
            {/* {blog.image && (
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )} */}
            <div className="p-6">
              <div className="flex items-center text-sm text-text-secondary mb-3">
                <Icon name="Calendar" size={16} className="mr-2" />
                <span>{formatDate(blog.created_at)}</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-text-secondary mb-4 line-clamp-3">
                {blog.content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-text-secondary">{blog.author}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => {}}
                  disabled
                >
                  Read More
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
} 