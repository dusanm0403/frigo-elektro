import React from 'react';
import Routes from './config/routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
