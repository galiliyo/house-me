import React, { Component } from 'react'
import { RoomContext } from '../useContext'
import Loading from './Loading'
import Room from './Room'
import styles from './featuredRooms.module.scss'


export default class FeaturedRooms extends Component {
  static contextType = RoomContext
  render() {
    let { loading, featuredRooms: rooms } = this.context
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />
    })

    return (
      <section className={styles['featured-rooms']}>
        <h2>Featured</h2>
        <div className={styles['featured-rooms-center']}>
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    )
  }
}

