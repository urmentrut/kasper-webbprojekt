import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Header from './components/Header';  
import LiveTracker from './pages/LiveTracker';
import CharacterStats from './pages/CharacterStats';
import QuestLogs from './pages/QuestLogs';
import BossTracker from './pages/BossTracker';
import Achievements from './pages/Achievements';


import './styles.css';     

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/live-tracker" element={<LiveTracker />} />
        <Route path="/character-stats" element={<CharacterStats />} />
        <Route path="/questlogs" element={<QuestLogs />} />
        <Route path="/bosstracker" element={<BossTracker />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </Router>
  );
}

export default App;