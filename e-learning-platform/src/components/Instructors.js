import React from 'react';

const InstructorCard = ({ instructor, index }) => {
  return (
    <div 
      className="card p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative mb-6">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary-100 group-hover:border-primary-300 transition-colors"
        />
        <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white rounded-full p-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {instructor.name}
      </h3>
      
      <p className="text-primary-600 font-semibold mb-3">
        {instructor.title}
      </p>
      
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {instructor.bio}
      </p>
      
      <div className="flex items-center justify-center space-x-4 mb-4">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">{instructor.experience}</div>
          <div className="text-xs text-gray-500">Years Exp.</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">{instructor.students}</div>
          <div className="text-xs text-gray-500">Students</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">{instructor.rating}</div>
          <div className="text-xs text-gray-500">Rating</div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {instructor.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="flex justify-center space-x-3">
        <button className="text-gray-400 hover:text-primary-600 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </button>
        <button className="text-gray-400 hover:text-primary-600 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="text-gray-400 hover:text-primary-600 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Alex Thompson",
      title: "Senior Full Stack Developer",
      bio: "Former Google engineer with 8+ years of experience. Specializes in React, Node.js, and cloud architecture. Passionate about teaching modern web development.",
      experience: "8+",
      students: "5.2k",
      rating: "4.9",
      skills: ["React", "Node.js", "AWS", "JavaScript"],
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Maria Garcia",
      title: "Frontend Specialist",
      bio: "UI/UX expert and frontend developer with experience at top tech companies. Expert in creating beautiful, responsive web applications.",
      experience: "6+",
      students: "3.8k",
      rating: "4.8",
      skills: ["HTML", "CSS", "Vue.js", "Design"],
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "James Wilson",
      title: "Backend Engineering Lead",
      bio: "15+ years in backend development and system architecture. Specializes in scalable APIs, databases, and microservices architecture.",
      experience: "15+",
      students: "4.1k",
      rating: "4.9",
      skills: ["Python", "Docker", "SQL", "DevOps"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Sarah Kim",
      title: "JavaScript Expert",
      bio: "Vanilla JavaScript to modern frameworks expert. Author of popular JavaScript libraries and contributor to open source projects.",
      experience: "10+",
      students: "6.5k",
      rating: "4.9",
      skills: ["JavaScript", "TypeScript", "React", "Angular"],
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "David Chen",
      title: "DevOps Engineer",
      bio: "Cloud infrastructure and deployment expert. Helps students understand modern deployment strategies and continuous integration.",
      experience: "7+",
      students: "2.9k",
      rating: "4.7",
      skills: ["AWS", "Kubernetes", "CI/CD", "Terraform"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      name: "Emma Rodriguez",
      title: "Mobile Web Expert",
      bio: "Specializes in responsive design and mobile-first development. Expert in Progressive Web Apps and modern CSS frameworks.",
      experience: "5+",
      students: "3.3k",
      rating: "4.8",
      skills: ["PWA", "Mobile", "CSS", "Performance"],
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="instructors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Meet Our Expert Instructors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Learn from industry professionals with years of real-world experience. Our instructors are passionate about sharing their knowledge and helping you succeed.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <InstructorCard key={instructor.id} instructor={instructor} index={index} />
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Join Our Teaching Team?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate developers and educators to join our community. Share your expertise and help shape the next generation of developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Apply to Teach
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;