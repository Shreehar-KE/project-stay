import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Featured from '../components/featured/Featured'
import './home.css'
import PropertyType from '../components/propertyType/PropertyType'
import Recommendation from '../components/recommendation/Recommendation'

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
        <PropertyType/>
      </div>
      <div className="section">
        <h2>Recommended for you</h2>
        <Recommendation/>
      </div>
    </div>
    </>
  )
}

export default Home