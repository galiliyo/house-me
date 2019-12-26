import React from 'react'

import { Link } from 'react-router-dom'
import SearchFeild from '../components/SearchFeild'
import FeturedRooms from '../components/FeaturedRooms'
import DatePicker from '../components/DatePicker'
export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-search">
          <h2>
            The comforts of home,
            <br />
            on the road
          </h2>
          <SearchFeild />
          <Link to="/rooms" className="btn-primary">
            All Listings
          </Link>
        </div>
      </div>
      <DatePicker />
      <FeturedRooms />
    </>
  )
}
