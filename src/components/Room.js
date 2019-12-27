import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose, IoIosSearch } from 'react-icons/io'
import { IoMdStar } from 'react-icons/io'
import defaultImg from '../images/room-1.jpeg'
import style from './room.module.scss'
import PropTypes from 'prop-types'

export default function Room({ room }) {
  const { name, city, slug, images, price, rating } = room

  return (
    <article>
      <div className={style['img-container']}>
        <img src={images[0] || defaultImg} alt="single room" />
      </div>
      <div className={style['first-row']}>
        <p>{city}</p>
        <span className="flex-spacer"></span>
        <IoMdStar className={style.icon} />
        <p>{rating}</p>
      </div>

      <h5>{name}</h5>
      <h5>${price} <span className="normal">/ night</span></h5>

      <Link to={`/rooms/${slug}`} className={style['room-link']}>
        Features
      </Link>
    </article>
  )
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
}
