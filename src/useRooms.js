import React, { useReducer } from 'react'
import Client from './Contentful'

// initial state
export const initialRoomsObj = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true,
  mostExpensive: 0,
  filters: {
    type: 'all',
    capacity: 1,
    maxPrice: 99999,
    accessible: false,
    pets: false,
  },
}

// setup reducer with useEffect

export const reducer = (state, action) => {
  // console.log('action',action)
  switch (action.type) {

    case 'SET_ROOMS': {
      const updatedState = {
        ...state,
        filters: { ...state.filters },
        ...action.payload,
        loading:false
      }
     
      return updatedState
    }
    case 'SET_FILTERS': {
      console.log('action',action.payload)
      const updatedFilters = { ...action.payload }
      const updatedState = {
        ...state,
        filters: updatedFilters,
      }
      console.dir(updatedState)
      return updatedState
    }
  }
}
