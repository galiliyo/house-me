import React from 'react'

const titleContainer = {
  display: 'flex',
  padding : '0.3rem 0',
  width: '90vw',
  maxWidth: '1170px'
}
const title = {
  borderBottom: '3px solid var(--secondaryColor)',
  marginBottom: '1rem',
  padding : '0.3rem 0',
  color :'var(--primaryColor)'
}

const Title = ({ content }) => {
  return (
    <div style={titleContainer}>
      <h2 className="normal" style={title}>
        {content}
      </h2>
    </div>
  )
}
export default Title
