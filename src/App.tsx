import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import WeightLoss from './pages/WeightLoss'
import Wellness from './pages/Wellness'
import Aesthetics from './pages/Aesthetics'
import Cannabis from './pages/Cannabis'
import HormoneTherapy from './pages/HormoneTherapy'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weight-loss" element={<WeightLoss />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/aesthetics" element={<Aesthetics />} />
            <Route path="/cannabis" element={<Cannabis />} />
            <Route path="/hormone-therapy" element={<HormoneTherapy />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
