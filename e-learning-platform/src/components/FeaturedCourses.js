import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-1">({rating}.0)</span>
    </div>
  );
};

const CourseCard = ({ course, index }) => {
  return (
    <div 
      className="card p-6 group animate-fade-in-up hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div className={`h-48 ${course.bgColor} flex items-center justify-center text-white text-6xl`}>
          {course.icon}
        </div>
        <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {course.level}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {course.title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-2">
        {course.description}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={course.rating} />
        <span className="text-lg font-bold text-primary-600">{course.price}</span>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {course.duration}
        </span>
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {course.students}
        </span>
      </div>
      
      <button className="w-full btn-primary">
        View Course
      </button>
    </div>
  );
};

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      description: "Learn the building blocks of web development with HTML and CSS. Create beautiful, responsive websites from scratch.",
      rating: 5,
      price: "$49",
      duration: "8 hours",
      students: "2.5k",
      level: "Beginner",
      icon: "🌐",
      bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      description: "Master JavaScript from basics to advanced concepts. Learn ES6+, DOM manipulation, and modern JavaScript features.",
      rating: 5,
      price: "$79",
      duration: "12 hours",
      students: "3.2k",
      level: "Intermediate",
      icon: "⚡",
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      id: 3,
      title: "React Development",
      description: "Build modern web applications with React. Learn components, hooks, state management, and best practices.",
      rating: 4,
      price: "$99",
      duration: "15 hours",
      students: "1.8k",
      level: "Advanced",
      icon: "⚛️",
      bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500"
    },
    {
      id: 4,
      title: "Node.js Backend",
      description: "Create powerful backend applications with Node.js. Learn Express, databases, and API development.",
      rating: 5,
      price: "$89",
      duration: "10 hours",
      students: "1.5k",
      level: "Intermediate",
      icon: "🚀",
      bgColor: "bg-gradient-to-br from-green-400 to-emerald-500"
    },
    {
      id: 5,
      title: "Full Stack Development",
      description: "Complete full stack course covering frontend, backend, and deployment. Build real-world applications.",
      rating: 5,
      price: "$199",
      duration: "25 hours",
      students: "950",
      level: "Advanced",
      icon: "🔧",
      bgColor: "bg-gradient-to-br from-purple-400 to-pink-500"
    },
    {
      id: 6,
      title: "Web Design & UX",
      description: "Learn modern web design principles, UX/UI design, and create stunning user experiences.",
      rating: 4,
      price: "$69",
      duration: "9 hours",
      students: "2.1k",
      level: "Beginner",
      icon: "🎨",
      bgColor: "bg-gradient-to-br from-pink-400 to-purple-500"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Discover our most popular web development courses designed to take you from beginner to professional developer.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;