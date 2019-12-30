import React, { useState, useEffect, useCallback } from 'react'

import Client from '../Contentful'

const RoomContext = React.createContext()
const RoomProvider = props => {
  const [roomsObj, setRoomsObj] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: false,
    mostExpensive: 0,
    filters: {
      type: 'all',
      capacity: 1,
      maxPrice: 99999,
      accessible: false,
      pets: false,
    },
  })

  // getData

  useEffect(() => {
    const getData = async () => {
      const { type, capacity, maxPrice, accessible, pets } = roomsObj.filters
      let typeFilter = type === 'all' || null ? 'Entire Apartment,Flat, ' : type

      console.log(roomsObj.filters)

      try {
        let response = await Client.getEntries({
          content_type: 'listings',
          'fields.type[in]': typeFilter,
          'fields.capacity[gte]': capacity,
          'fields.price[lte]': maxPrice,
          order: '-fields.price',
        })

        let rooms = formatData(response.items)
        let featuredRooms = rooms.filter(room => room.featured === true)
        let mostExpensive = Math.max(...rooms.map(item => item.price))

        const updatedRooms = { ...roomsObj }
        updatedRooms.rooms = rooms
        updatedRooms.featuredRooms = featuredRooms
        updatedRooms.mostExpensive = mostExpensive
        updatedRooms.loading = false

        setRoomsObj(updatedRooms)

        console.log('roomsObj in eff', roomsObj)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [roomsObj.filters])

  const formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url)

      let room = { ...item.fields, images, id }

      return room
    })
    return tempItems
  }
  const getRoom = id => {
    let tempRooms = [...this.state.rooms]
    const room = tempRooms.find(room => room.id === id)
    return room
  }
  const handleChange = event => {
    console.log('handlechange')

    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = event.target.name

    const updatedFilters = { ...roomsObj.filters }
    updatedFilters[name] = value

    const updatedRooms = { ...roomsObj }
    updatedRooms.filters = updatedFilters
    setRoomsObj(updatedRooms)
  }

  return (
    <RoomContext.Provider
      value={{
        roomsObj,
        getRoom: getRoom,
        handleChange: handleChange,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  )
}

export { RoomProvider, RoomContext }
