import {Routes, Route, } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ChallengePage from './pages/ChallengePage'

function App() {
 

  return (

      <Routes>   
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
    </Routes>     

  )
}

export default App
