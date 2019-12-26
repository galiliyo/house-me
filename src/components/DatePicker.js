import React, { Component } from 'react'
import { DateRange } from 'react-date-range'

class Picker extends Component {
  handleSelect(range) {
    console.log(range)
    console.log(new Date())

    // An object with two keys,
    // 'startDate' and 'endDate' which are Momentjs objects.
  }

  render() {
    const today = new Date()
    const date =
      today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
    return (
      <div>
        <DateRange
          onInit={this.handleSelect}
          onChange={this.handleSelect}
          minDate={date}
        />
      </div>
    )
  }
}

export default Picker
