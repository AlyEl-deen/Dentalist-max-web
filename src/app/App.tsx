import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing-page';
import SubscriberForm from './components/subscriber-form';
import RegistrationForm from './components/registration-form';

export default function App() {
  return (
    <Router basename="/Dentalist-max-web">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/subscribe" element={<SubscriberForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
  
}
