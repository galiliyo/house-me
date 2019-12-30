import React, { useReducer, useEffect } from 'react'
import { useRoomContext } from './useContext'
import './styles/styles.scss'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import client from './Contentful'
import { reducer, initialRoomsObj } from './useRooms'
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'

// TODO: Single Page, search, price filter, map


const App = () => {
  const [roomsObj, dispatch] = useReducer(reducer, initialRoomsObj)

  // client.getEntries().then(function(entries) {
  //   // log the title for all the entries that have it
  //   entries.items.forEach(entry => {
  //     console.log(entry.fields)
  //   })
  // })

  useEffect(() => {
    const getData = async () => {
      console.log('flites in eff', roomsObj.filters)
      const { type, capacity, maxPrice, accessible, pets } = roomsObj.filters
      let typeFilter = type === 'all' || null ? 'Entire Apartment,Flat, ' : type

      try {
        let response = await client.getEntries({
          content_type: 'listings',
          'fields.type[in]': typeFilter,
          'fields.capacity[gte]': capacity,
          'fields.price[lte]': maxPrice,
          order: '-fields.price',
        })
console.log(response.items);

        let rooms = formatData(response.items)
        let featuredRooms = rooms.filter(room => room.featured === true)
        let mostExpensive = Math.max(...rooms.map(item => item.price))

        const updatedRooms = {
          ...roomsObj,
          rooms,
          featuredRooms,
          mostExpensive,
          loading: false,
        }
        dispatch({ type: 'SET_ROOMS', payload: updatedRooms })
      } catch (error) {
        console.log(error)
      }
    }

    const formatData = items => {
      let tempItems = items.map(item => {
        let id = item.sys.id
        // console.log('images', id, item.fields.images)

        let images = item.fields.images.map(image => image.fields.file.url)

        let room = { ...item.fields, images, id }
        return room
      })
      return tempItems
    }
    getData()
  }, [roomsObj.filters])

  return (
    <useRoomContext.Provider value={{ roomsObj, dispatch }}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </useRoomContext.Provider>
  )
}

export default App
