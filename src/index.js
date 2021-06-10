import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

const anchors = ['hello', 'about', 'skills', 'works', 'contact'];
const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Header />
            <Hero />
          </div>
          <div className="section about">
            <About />
          </div>
          <div className="section">
            <Skills />
          </div>
          <section className="section works">
            <Works />
          </section>
          <section className="section contact">
            <Contact />
          </section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Fullpage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
