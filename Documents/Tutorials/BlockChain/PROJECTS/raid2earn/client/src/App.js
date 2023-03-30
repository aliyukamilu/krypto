import React from "react";
import Main from './Main'
import { Profile, ErrorPage, Hunt } from './pages'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hunt/:huntId" element={<Hunt />} />
        <Route path="/profile/:address" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
