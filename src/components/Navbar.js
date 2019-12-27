import React, { Component } from 'react'
import logo from '../images/logo.svg'
import styles from './navbar.module.scss'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = {
    isOpen: false,
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className={styles.navBtn}
              onClick={this.handleToggle}
            >
              <FaAlignRight className={styles.navIcon} />
            </button>
          </div>
          <ul
            className={
              this.state.isOpen
                ? `${styles.navLinks} ${styles.showNav}`
                : styles.navLinks
            }
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
