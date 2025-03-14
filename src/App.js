// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { DiceGame } from './Components/GamePage/DiceGame';
import { Contact } from './Components/ContactUs/Contact';
import Home from './Components/HomePage/Home';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dicegame" element={<DiceGame />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>      
    </div>
  );
}