import React, { useContext } from 'react'
import { useRoomContext } from '../useContext'
import Loading from './Loading'
import Title from './Title'
import Room from './Room'
import styles from './featuredRooms.module.scss'

const FeaturedRooms = () => {
  const ctx = useContext(useRoomContext)

  const { roomsObj, dispatch } = ctx
  const { featuredRooms, loading } = roomsObj

  const rooms = featuredRooms.map(room => {
    return <Room key={room.id} room={room} />
  })

  return (
    <section className={styles['featured-rooms']}>
      <Title content="Featured" />
      <div className={styles['featured-rooms-center']}>
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  )
}

export default FeaturedRooms
