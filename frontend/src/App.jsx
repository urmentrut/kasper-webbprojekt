import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import React Router
import Header from './components/Header';  // Import the Header component
import Home from './pages/Home';  // Import the Home page component
import About from './pages/About';  // Import the About page component

function App() {
  return (
    <Router>
      {/* Header will be displayed on every page */}
      <Header />  

      {/* Define the routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/about" element={<About />} />  {/* About page */}
      </Routes>
    </Router>
  );
}

export default App;
