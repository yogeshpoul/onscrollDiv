import React, { useState, useEffect } from 'react';
import { Complaints } from './Complaint';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = ['home', 'achievements', 'complaints', 'about-us'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='fixed bg-gray-200 w-full'>
        <nav>
          <ul className='relative flex flex-col justify-start md:flex-row'>
            <li className={`px-3 ${activeSection === 'home' ? ' text-white' : ''}`}>
              <button onClick={() => scrollToSection('home')}>Home</button>
            </li>
            <li className={`px-3 ${activeSection === 'achievements' ? ' text-white' : ''}`}>
              <button onClick={() => scrollToSection('achievements')}>Achievements</button>
            </li>
            <li className={`px-3 ${activeSection === 'complaints' ? ' text-white' : ''}`}>
              <button onClick={() => scrollToSection('complaints')}>Complaints</button>
            </li>
            <li className={`px-3 ${activeSection === 'about-us' ? ' text-white' : ''}`}>
              <button onClick={() => scrollToSection('about-us')}>About Us</button>
            </li>
          </ul>
        </nav>
      </div>
      <div id="home" className='bg-red-500 h-screen pt-5 '>
        <div className='text-center'>Home</div>
      </div>
      <div id="achievements" className='bg-green-500 h-screen text-center pt-5'>
        Achievements
      </div>
      <div id="complaints" className='bg-blue-500 h-screen text-center pt-5'>
        Complaints
        <Complaints/>
      </div>
      <div id="about-us" className='bg-gray-500 h-screen text-center pt-5'>
        About Us
      </div>
    </div>
  );
}

export default App;
