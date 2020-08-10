import React from 'react';
import Routes from './config/routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import background from './assets/background.png';

const App = () => {
  return (
    <div className="app" style={{backgroundImage: `url(${background})`}}>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
