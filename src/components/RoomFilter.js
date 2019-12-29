import React from 'react'
import { useContext, useState } from 'react'
import { useRoomContext } from '../useContext'
import SearchFeild from './SearchFeild'
import styles from './roomFilter.module.scss'

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter() {
  const context = useContext(useRoomContext)
  const {
    dispatch,
    roomsObj: { rooms, mostExpensive, filters },
  } = context
  const [localFilters, setLocalFilters] = useState({
    ...filters,
    maxPrice: mostExpensive,
  })

  // console.log('localFilters', localFilters)
  const { type, capacity, maxPrice, breakfast, pets } = localFilters

  const handleChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = event.target.name

    const updatedLocalFilters = { ...localFilters }
    updatedLocalFilters[name] = value
    setLocalFilters(updatedLocalFilters)

    dispatch({
      type: 'SET_FILTERS',
      payload: localFilters,
    })
  }

  var value
  // get unique types
  let types = getUnique(rooms, 'type')
  // add all
  types = ['all', ...types]

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  })
  let people = getUnique(rooms, 'capacity')
  people = people.sort().map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    )
  })
  return (
    <section className={`${styles['filter-container']} section-container `}>
      <h4>Search Listings</h4>
      <SearchFeild page="form"/>
      <form className={styles["filter-form"]}>
        {
          //select type  //
        }
        <div className={styles["form-group"]}>
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className={styles["form-control"] }
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {
          //end select type
        }
        {
          //guests   //
        }
        <div className={styles["form-group"]}>
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className={styles["form-control"] }
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {
          // end guests  //
        }
        {
          // room price //
        }
        <div className={styles["form-group"]}>
          <label htmlFor="price">room price ${maxPrice}</label>
          <input
            type="range"
            name="maxPrice"
            min="0"
            max={mostExpensive}
            id="price"
            value={maxPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {
          // end of room price //
        }

        {
          // extras  //
        }
        <div className={styles["form-group"]}>
          <div className={styles["single-extra"]}>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className={styles["single-extra"]}>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {
          // end of extras  //
        }
      </form>
    </section>
  )
}
