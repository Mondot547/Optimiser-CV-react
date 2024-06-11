import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Realisation from './pages/Realisation';
import Contact from './pages/Contact';
import './assets/styles/main.css';
import Blog from './pages/Blog';
import Services from './pages/Services';
import MentionsLegales from './pages/MentionsLegales';
import GitHubProfile from './components/GithubProfil';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Realisation />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mentionsLegales' element={<MentionsLegales />} />
        <Route path='/githubProfile' element={<GitHubProfile />} />
      </Routes>
    </>
  )
}

export default App
