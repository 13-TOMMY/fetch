
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ApiTester from "./pages/ApiTester";
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'



function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/apitester" element={<ApiTester/>} />
        <Route path="*" element={<Homepage />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
