import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaCode } from 'react-icons/fa'; // Generic code icon
import { SiCodeforces, SiCodechef } from 'react-icons/si'; // Icons for Codeforces and CodeChef
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigationToContactme = () => {
    navigate('/contact');
  };

  const handleExternalNavigation = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Dileep
          <br />
          Full Stack Developer
        </h1>
      </div>
      <Animate play duration={1.5} delay={1} start={{ transform: 'translateY(550px)' }} end={{ transform: 'translateX(0px)' }}>
        <div className="home__contact-me">
          <button onClick={handleNavigationToContactme}>Hire Me</button>
        </div>
      </Animate>
      <Animate play duration={1.5} delay={1.5} start={{ transform: 'translateY(550px)' }} end={{ transform: 'translateX(0px)' }}>
        <div className="home__profiles">
          <button title="LeetCode" onClick={() => handleExternalNavigation('https://leetcode.com/u/dileep_9797/')}>
            <FaCode size={30} />
          </button>
          <button title="CodeForces" onClick={() => handleExternalNavigation('https://codeforces.com/profile/dileep_9797')}>
            <SiCodeforces size={30} />
          </button>
          <button title="CodeChef" onClick={() => handleExternalNavigation('https://www.codechef.com/users/dileep9797')}>
            <SiCodechef size={30} />
          </button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
