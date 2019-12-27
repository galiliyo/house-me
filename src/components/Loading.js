import React from 'react'
import { css } from '@emotion/core'
// // First way to import
// import { ClipLoader } from 'react-spinners'
// Another way to import. This is recommended to reduce bundle size
import GridLoader from 'react-spinners/GridLoader'

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  
`

class Spinner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  render() {
    return (
      <div className="sweet-loading">
        <GridLoader
          css={override}
          size={16}
          //size={"150px"} this also works
          color={'#e74c3c'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}


export default Spinner