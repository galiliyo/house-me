import React, { useContext } from 'react'
import { useRoomContext } from '../useContext'
import Room from './Room'
export default function RoomList() {
  const context = useContext(useRoomContext)
  const {
    roomsObj: { rooms },
  } = context

  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    )
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={item.id} room={item} />
        })}
      </div>
    </section>
  )
}
