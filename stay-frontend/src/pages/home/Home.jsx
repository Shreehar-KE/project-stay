import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Featured from '../components/homepageLists/Featured'
import './home.css'
import PropertyType from '../components/homepageLists/PropertyType'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <div className="section">
        <h2>Featured Destinations</h2>
        <Featured/>
      </div>
      <div className="section">
        <h2>Search by Type</h2>
        {/* <PropertyType/>  */}
      </div>
    </div>
    </>
  )
}

export default Home