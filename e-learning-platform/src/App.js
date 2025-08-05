import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Testimonials from './components/Testimonials';
import Instructors from './components/Instructors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedCourses />
      <Testimonials />
      <Instructors />
      <Footer />
    </div>
  );
}

export default App;
