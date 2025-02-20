import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Loader from './components/Loader.jsx'

const Home = React.lazy(() => import('./landingPage/Home.jsx'))

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}

export default App
