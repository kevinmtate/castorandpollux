import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Shows from './pages/Shows/Shows';
import About from './pages/About/About';
import Releases from './pages/Releases/Releases';
import Footer from './components/Hero/Footer/Footer';
import Contact from './pages/Contact/Contact';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const App = () => {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/about' element={<About />} />
          <Route path='/releases' element={<Releases />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
