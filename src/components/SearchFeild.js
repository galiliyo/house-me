import React, { useState } from 'react'
import { IoMdClose, IoIosSearch } from 'react-icons/io'

const SearchFeild = props => {
  const [searchStr, setSearchStr] = useState('')

  return (
    <div className="search-feild">
      <input
        type="text"
        value={searchStr}
        placeholder={'Where to?'}
        onChange={e => {
          setSearchStr(e.target.value)
        }}
      />
      <span
        className="icon-container"
        style={{ opacity: searchStr ? '1' : '0' }}
        onClick={() => {
          setSearchStr('')
        }}
      >
        <IoMdClose className="icon" />
      </span>
      <span className="icon-container" onClick={() => props.setSearchStr}>
        <IoIosSearch className="icon" style={{ fontSize: ' 2rem' }} />
      </span>
    </div>
  )
}

export default SearchFeild
