import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'

import Home from "./page/Home"
import Series from './page/Series'
import Anime from './page/Anime'
import NovaSerie from './page/NovaSerie'
import AnimeSearch from './page/AnimeSearch/index.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter> 
      <Header />
        <Routes> 
          <Route path='/' element={<Home />}></Route> 
          <Route path='/novaserie' element={<NovaSerie />}></Route> 
          <Route path='/series' element={<Series />}></Route> 
          <Route path='/procuraranime' element={<AnimeSearch />}></Route> 
          <Route path='/animes' element={<Anime />}></Route> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}