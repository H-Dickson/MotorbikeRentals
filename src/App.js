import React from 'react';
import Navbar from './pages/components/navbar/Navbar';
import HomePage from './pages/HomePage';
import BikesPage from './pages/BikesPage';
import BikePage from './pages/BikePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
let Component
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
    <div>
      <Navbar />
      {Component}
    </div>
  );
}

export default App;
