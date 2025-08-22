import React from 'react'
import './App.css'
import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Approutes from './routes';
import Footer from './components/footer';
import ScrollToTop from './components/scrollTop';

function App() {


  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Approutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
