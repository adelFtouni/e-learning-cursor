import React, { useState, useEffect } from 'react';

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="card p-8 max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <svg className="w-12 h-12 text-primary-200 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3.102 6.15c0-1.74 1.41-3.15 3.15-3.15 1.74 0 3.15 1.41 3.15 3.15 0 1.228-.707 2.29-1.738 2.814L9.014 11.5h-2.32l-.998-2.186c.668-.48 1.102-1.262 1.102-2.164zM10.898 6.15c0-1.74 1.41-3.15 3.15-3.15 1.74 0 3.15 1.41 3.15 3.15 0 1.228-.707 2.29-1.738 2.814l1.35 2.536h-2.32l-.998-2.186c.668-.48 1.102-1.262 1.102-2.164z" />
          </svg>
        </div>
        
        <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic">
          "{testimonial.content}"
        </blockquote>
        
        <div className="flex items-center justify-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div className="text-left">
            <div className="font-semibold text-gray-900">{testimonial.name}</div>
            <div className="text-gray-600">{testimonial.role}</div>
            <div className="flex mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-4 h-4 ${
                    star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      content: "WebLearn transformed my career completely. The JavaScript course was incredibly comprehensive and the projects helped me build a strong portfolio. I landed my dream job as a frontend developer within 3 months!",
      name: "Sarah Johnson",
      role: "Frontend Developer at Tech Corp",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      content: "The React course exceeded my expectations. The instructor's teaching style is amazing and the hands-on projects made complex concepts easy to understand. Best investment I've made in my career!",
      name: "Michael Chen",
      role: "React Developer at StartupXYZ",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      content: "I went from zero coding knowledge to building full-stack applications in just 6 months. The curriculum is well-structured and the community support is incredible. Highly recommended!",
      name: "Emily Rodriguez",
      role: "Full Stack Developer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      content: "The Node.js backend course was exactly what I needed to advance my career. The practical approach and real-world projects gave me the confidence to tackle complex backend challenges.",
      name: "David Kim",
      role: "Backend Engineer at Global Tech",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Join thousands of successful students who have transformed their careers with our comprehensive web development courses.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Cards */}
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500`}
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  isActive={index === currentIndex}
                />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none ${
                  index === currentIndex 
                    ? 'bg-primary-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-3xl font-bold text-primary-600">10,000+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-3xl font-bold text-primary-600">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-3xl font-bold text-primary-600">95%</div>
            <div className="text-gray-600">Job Success Rate</div>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '1s'}}>
            <div className="text-3xl font-bold text-primary-600">2M+</div>
            <div className="text-gray-600">Hours Learned</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;