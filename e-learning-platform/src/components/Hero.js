import React from 'react';

const CodingIcon = ({ icon, className, animationDelay = "0s" }) => {
  return (
    <div 
      className={`${className} animate-bounce-slow`}
      style={{ animationDelay }}
    >
      <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl font-bold hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-95"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Master Web Development 
              <span className="block text-yellow-300">Online</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Learn HTML, CSS, JavaScript, React, and more with our comprehensive courses. 
              Build real projects and become a professional web developer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <button className="btn-primary bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-8 py-4">
                Start Learning
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-blue-200 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-blue-200 text-sm">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Coding Icons */}
          <div className="relative h-96 lg:h-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Coding Symbol */}
              <div className="relative">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-4xl font-bold text-primary-600 animate-pulse">
                  &lt;/&gt;
                </div>
                
                {/* Floating Icons */}
                <CodingIcon 
                  icon="📝" 
                  className="absolute -top-16 -left-16" 
                  animationDelay="0s"
                />
                <CodingIcon 
                  icon="🎨" 
                  className="absolute -top-8 -right-20" 
                  animationDelay="0.5s"
                />
                <CodingIcon 
                  icon="⚡" 
                  className="absolute -bottom-12 -left-20" 
                  animationDelay="1s"
                />
                <CodingIcon 
                  icon="🚀" 
                  className="absolute -bottom-16 -right-12" 
                  animationDelay="1.5s"
                />
                
                {/* Technology Badges */}
                <div className="absolute top-20 -left-8 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-fade-in" style={{animationDelay: '2s'}}>
                  HTML
                </div>
                <div className="absolute top-32 -right-8 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-fade-in" style={{animationDelay: '2.2s'}}>
                  CSS
                </div>
                <div className="absolute -bottom-8 left-16 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold animate-fade-in" style={{animationDelay: '2.4s'}}>
                  JavaScript
                </div>
                <div className="absolute -bottom-4 -right-16 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-fade-in" style={{animationDelay: '2.6s'}}>
                  React
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;