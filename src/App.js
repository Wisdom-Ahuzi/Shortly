import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Blogs from './Blogs'
import Footer from './Footer'
import { useState } from "react";


const App = () => {

  const [drop, setDrop] = useState('')
  const [head, setHead] = useState('')

  const handleBurger = () => {
    if (drop === '') {
      setDrop('nav')
      setHead('headee')

    } else{
      setDrop('')
      setHead('')
    }
  }

  return (
    <div className='App'>
        <Navbar drop = {drop} handleBurger = {handleBurger}/>
        <Header head={head} drop = {drop} handleBurger = {handleBurger}/>
        <Blogs />
        <Footer />
    </div>
  )
}

export default App
