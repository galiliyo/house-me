import React, { useState } from 'react'
import { IoMdClose, IoIosSearch } from 'react-icons/io'
import styles from './searchFeild.module.scss'

const SearchFeild = props => {
  const [searchStr, setSearchStr] = useState('')

  return (
    <div className={styles.searchFeild}>
      <input
        type="text"
        value={searchStr}
        placeholder={'Where to?'}
        onChange={e => {
          setSearchStr(e.target.value)
        }}
      />
      <span
        className={styles.iconContainer}
        style={{ opacity: searchStr ? '1' : '0' }}
        onClick={() => {
          setSearchStr('')
        }}
      >
        <IoMdClose className={styles.icon} />
      </span>
      <span className={styles.iconContainer} onClick={() => props.setSearchStr}>
        <IoIosSearch className={styles.icon} style={{ fontSize: ' 2rem' }} />
      </span>
    </div>
  )
}

export default SearchFeild
