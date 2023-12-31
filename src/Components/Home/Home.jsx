import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Footer from '../Footer/Footer';
import { ThemeContext } from '../../context';
import { useContext } from 'react';

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? ' #22272b' : 'white',
        color: darkMode && 'white',
      }}
    >
      <Navbar />
      <About />
      <Footer />
      <style jsx>{`
        .nav {
          background-color: ${darkMode ? ' #22272b;' : 'inherit'};
        }
        .l-header {
          background-color: ${darkMode ? ' #22272b;' : 'inherit'};
        }
        .nav__link {
          color: ${darkMode ? 'white' : 'black'};
        }
        .nav__logo{
          color: ${darkMode ? 'white' : 'black'};
        }
      `}</style>
    </div>
  );
};

export default Home;