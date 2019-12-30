import React, { Component } from 'react'
import logo from '../images/logo.svg'
import styles from './navbar.module.scss'
import { FaAlignRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

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
            <NavLink to="/">
              <img src={logo} alt="House Me" />
            </NavLink>
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
              <NavLink exact activeClassName="active" to="/" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/rooms">Rooms</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
