import React, { useContext } from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import {useRoomContext} from '../useContext'
import Loading from './Loading'

function RoomContainer() {
  const context = useContext(useRoomContext)
  const { roomsObj, dispatch } = context

  if (roomsObj.loading) {
    return <Loading />
  }

  else {
    
    return (
      <>
        <RoomsFilter rooms={context} />
        <RoomsList rooms={roomsObj} />
      </>
    )
  }
}
export default RoomContainer
