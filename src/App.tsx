import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './components/layout/UserLayout';




// Pages
import Home from './page/Home';
import AboutSection from './components/about/AboutSection';
import LocationPage from './components/about/LocationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/about/:section" element={<AboutSection />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/about/location" element={<LocationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;