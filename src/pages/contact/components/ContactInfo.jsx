import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'bettsonk@gmail.com',
      link: 'mailto:bettsonk@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+254 742 771 316',
      link: 'tel:+254742771316',
      description: 'Call me during business hours'
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Nairobi, Kenya',
      link: null,
      description: 'Available for local meetings'
    },
    {
      icon: 'Clock',
      label: 'Business Hours',
      value: 'Mon - Fri, 9AM - 6PM EAT',
      link: null,
      description: 'Response within 24 hours'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/bettson-kiptoo',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/bettson-kiptoo',
      color: 'text-gray-800 hover:text-gray-900'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/bettson_kiptoo',
      color: 'text-blue-400 hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/bettson_kiptoo',
      color: 'text-pink-600 hover:text-pink-700'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={detail.icon} size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{detail.label}</h3>
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium">{detail.value}</p>
                )}
                <p className="text-sm text-gray-600 mt-1">{detail.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h2>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-200"
            >
              <Icon name={social.icon} size={24} className={social.color} />
              <span className="font-medium text-gray-900">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="CheckCircle" size={20} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Currently Available</h3>
            <p className="text-gray-600 mb-4">
              I'm accepting new projects and would love to hear about your ideas. Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Clock" size={16} />
              <span>Typical response time: 2-4 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What's your typical project timeline?</h3>
            <p className="text-gray-600">
              Project timelines vary based on complexity, but most web development projects take 2-8 weeks from start to finish.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Do you work with international clients?</h3>
            <p className="text-gray-600">
              Absolutely! I work with clients worldwide and am comfortable with different time zones and communication preferences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What's included in your development services?</h3>
            <p className="text-gray-600">
              I provide end-to-end development including planning, design, development, testing, deployment, and ongoing support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;