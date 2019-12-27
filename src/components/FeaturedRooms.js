import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Title from "./Title"
import Room from './Room'
import styles from './featuredRooms.module.scss'

const FeaturedRooms = () => {
  const ctx = useContext(RoomContext)

  let { loading, featuredRooms: rooms } = ctx
  rooms = rooms.map(room => {
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
