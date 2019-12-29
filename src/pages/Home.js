import React from 'react'
import { Link } from 'react-router-dom'
import SearchFeild from '../components/SearchFeild'
import FeturedRooms from '../components/FeaturedRooms'
import Promo from '../components/Promo'
import illus1 from '../images/illustration-1.png'
import illus2 from '../images/illustration-2.png'
import illus3 from '../images/illustration-3.png'
import Title from '../components/Title'
import styles from './home.module.scss'
export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroSearch}>
          <h2>
            The comforts of home,
            <br />
            on the road
          </h2>
          <SearchFeild page="home"/>
          <Link to="/rooms" className="btnPrimary">
            All Listings
          </Link>
        </div>
      </section>
      <FeturedRooms />
      <section>
        <Title content="Try House-me">
          <p className="section-container">
            Tired of shuffeling from hotel to hotel? Cut costs and discover the
            benefits of enrolling your company in House-me.
          </p>
        </Title>
        <Promo illustration={illus1} order="1">
          <div className={styles.text}>
            <h4>
              Thousands of work-friendly homes for business travel around the
              world
            </h4>

            <p>
              Whether you’re going on a business trip or relocating to a new
              city, find homes and boutique hotels with 5-star reviews from
              other business travelers.
            </p>
          </div>
        </Promo>
        <Promo illustration={illus2} order="2">
          <div className={styles.text}>
            <h4>Spaces that spark creativity</h4>
            <p>
              Need to get off site for the day? Collaborate with your team in a
              workspace designed to give you a fresh perspective. Take a
              ramen-making class or a canoeing lesson to connect with your
              co-workers outside of the office
            </p>
          </div>
        </Promo>
        <Promo illustration={illus3} order="3">
          <div className={styles.text}>
            <h4>
              Thousands of work-friendly homes for business travel around the
              world
            </h4>
            <p>
              Whether you’re going on a business trip or relocating to a new
              city, find homes and boutique hotels with 5-star reviews from
              other business travelers.
            </p>
          </div>
        </Promo>
      </section>
      <footer/>
    </>
  )
}
