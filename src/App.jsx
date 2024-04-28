import React from 'react';

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('achievements')}>Achievements</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('complaints')}>Complaints</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about-us')}>About Us</button>
          </li>
        </ul>
      </nav>
      <div id="home" className='bg-red-500 h-screen'>
      <div className='text-center'>Home</div>
      </div>
      <div id="achievements" className='bg-green-500 h-screen text-center'>
      Achievements
      </div>
      <div id="complaints" className='bg-blue-500 h-screen text-center'>
      Complaints
      </div>
      <div id="about-us" className='bg-gray-500 h-screen text-center'>
      About Us
      </div>
    </div>
  );
}

export default App;
