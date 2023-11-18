import React from 'react';
import Navbar from './pages/components/navbar/Navbar';
import Footer from './pages/components/footer/Footer';
import HomePage from './pages/HomePage';
import BikesPage from './pages/BikesPage';
import BikePage from './pages/BikePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Schema from './Schema';
import styles from './App.module.css'; // Import your CSS Module

function App() {


  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <HomePage />;
      break;
    case "/bikes":
      Component = <BikesPage />;
      break;
    case "/about":
      Component = <AboutPage />;
      break;
    case "/contact":
      Component = <ContactPage />;
      break;
    default:
      // Check if the path matches "/bikes/" followed by an integer
      if (/^\/bikes\/\d+$/.test(window.location.pathname)) {
        Component = <BikePage />;
      } else {
        window.location.pathname = "";
        Component = <HomePage />;
      }
  }

  return (
    <div >
      <Schema />
      <Navbar />
      <div className={styles.fadeIn}>
        {Component}
      </div>
      <Footer />
    </div>
  );
}

export default App;
