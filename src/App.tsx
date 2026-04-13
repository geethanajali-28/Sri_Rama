import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './components/layout/UserLayout';
import Home from './page/Home';
import AboutPage from './page/About';
import Campus from './components/Campus/Campus';
import Admission from './page/Admission';
import Eligibility from './components/admission/Eligibility';
import ApplicationForm from "./components/admission/Admissionform"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<UserLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/Campus" element={<Campus />} />

          {/* ABOUT */}
          <Route path="/about/*" element={<AboutPage />} />

          {/* ADMISSIONS */}
          <Route path="/admissions" element={<Admission />} />
          <Route path="/admissions/eligibility" element={<Eligibility />} />
          <Route path="/admissions/application-form" element={<ApplicationForm />} />

        </Route>   {/* ← only ONE closing Route here */}
      </Routes>
    </Router>
  );
}

export default App;