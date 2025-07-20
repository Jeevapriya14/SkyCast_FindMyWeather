import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Weather from './pages/Weather';
function App() {
  const [city, setCity] = useState('');
  return (
    <Routes>
      <Route path="/" element={<Home city={city} setCity={setCity} />} />
      <Route path="/Weather" element={<Weather city={city} />} />
    </Routes>
  );
}
export default App;
