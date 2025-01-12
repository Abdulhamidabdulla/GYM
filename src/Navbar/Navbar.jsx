import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Home from '../components/NavbarSections/Home'
import About from '../components/NavbarSections/About'
import Services from '../components/NavbarSections/Services'
import Pricing from '../components/NavbarSections/Pricing'
import Contact from '../components/NavbarSections/Contact'
import gym from '../assets//—Pngtree—fitness gym logo png_7964069.png'
import Join from '../components/NavbarSections/Join'
import Start from '../components/NavbarSections/Start'
import play from '../assets/play-button-icon-png-18910.png'
import Demo from '../components/NavbarSections/Demo'
import big from '../assets/toppng.com-hil-heath-ffmi35-mr-olympia-2018-phil-heath-454x460.png'
import Head from '../components/NavbarSections/Head'

const NavbarContainer = () => {
  return (
    <div>
      <nav>
        <Link to="/"><img src={gym} className="brand" /></Link>
        <ul>
          <li className='item'>
            <Link to="/" className='item'>Bosh qism</Link>
          </li>
          <li className='item'>
            <Link to="/about" className='item'>GYM Haqida</Link>
          </li>
          <li className='item'>
            <Link to="/services" className='item'>Servislar</Link>
          </li>
          <li className='item'>
            <Link to="/pricing" className='item'>Narxlar</Link>
          </li>
          <li className='item'>
            <Link to="/contact" className='item'>Bog'lanish</Link>
          </li>
        </ul>
        <Link to="/joining"><button className='btn1'>Qo'shilish</button></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/joining" element={<Join />} />
        <Route path="/starting" element={<Start />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/" element={<Head />} />
      </Routes>
      <div className="gap">
        <h1 style={{textTransform:"uppercase", width:"42rem"}} className='gap1 text-wrap'>salomatlik va hayotiylik uchun tayyorgarligingizni oshiring</h1>
        <p className='gap2 text-wrap' style={{width:"37rem"}}>Paragraf - mavzu deb ataladigan markaziy fikrni rivojlantiruvchi bir-biriga bog'langan jumlalar qatori. Paragraflar haqida tematik birlik nuqtai nazaridan o'ylashga harakat qilishingiz lozim!</p>
        <Link to="/starting"><button className='btn2'>Boshlash</button></Link>
       <Link to="/demo"><div className='playbtn'>
          <img src={play} className="play" />
          <p className='pb1'>Qo'llanma Ko'rish</p>
        </div></Link>
      </div>
      <img src={big} className="bigim" />
    </div>
  )
}

export default NavbarContainer;