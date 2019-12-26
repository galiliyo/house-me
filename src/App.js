import React from 'react'
import './App.css'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import client from './Contentful'

import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  client.getEntries().then(function(entries) {
    // log the title for all the entries that have it
    entries.items.forEach(entry => {
      console.log(entry.fields)
    })
  })

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
