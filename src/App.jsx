import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Realisation from './pages/Realisation';
import Contact from './pages/Contact';
import './assets/styles/main.css';
import Blog from './pages/Blog';
import Services from './pages/Services';
import MentionsLegales from './pages/MentionsLegales';
import GitHubProfil from './components/GitHubProfil';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/github-profil" element={<GitHubProfil />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;