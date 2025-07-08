import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PersonalIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Hello, I'm Bettson
            </h2>
            <div className="space-y-6 text-lg text-text-secondary">
              <p>
                I'm a passionate full-stack developer with over 4 years of experience creating 
                digital solutions that make a difference. My journey in technology began with a 
                curiosity about how things work behind the scenes of the web, and it has evolved 
                into a career dedicated to crafting exceptional user experiences.
              </p>
              <p>
                Based in Nairobi, Kenya, I specialize in modern web technologies including React, 
                Node.js, and cloud platforms. I believe in writing clean, maintainable code and 
                building applications that are not only functional but also delightful to use.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying a perfect cup of Kenyan coffee while planning my next 
                adventure. I'm always eager to learn and take on new challenges that push the 
                boundaries of what's possible.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon name="Calendar" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">4+ Years</div>
                  <div className="text-sm text-text-secondary">Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                  <Icon name="Award" size={20} className="text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">50+</div>
                  <div className="text-sm text-text-secondary">Projects Completed</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">25+</div>
                  <div className="text-sm text-text-secondary">Happy Clients</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon name="Code" size={20} className="text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">4+</div>
                  <div className="text-sm text-text-secondary">Technologies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="./public/assets/images/profile.jpg"
                  alt="Bettson Kiptoo - About"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Icon name="Code" size={24} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <Icon name="Heart" size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalIntro;
