import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TinaProvider } from './components/providers/TinaProvider';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Benefits } from './components/Benefits';
import { Metrics } from './components/Metrics';
import { CaseStudies } from './components/CaseStudies';
import { Newsletter } from './components/Newsletter';

function App() {
  return (
    <TinaProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <SocialProof />
            <Benefits />
            <Metrics />
            <CaseStudies />
            <Newsletter />
          </main>
          <Footer />
        </div>
      </Router>
    </TinaProvider>
  );
}

export default App;