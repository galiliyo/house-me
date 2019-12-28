import React from 'react'

const titleContainer = {
  padding: '0.3rem 0',
  width: '90vw',
  maxWidth: '1170px',
  margin: '0 auto',
}
const title = {
  borderBottom: '3px solid var(--secondaryColor)',
  display: 'inline-block',
  marginBottom: '1rem',
  padding: '0.3rem 0',
  color: 'var(--primaryColor)',
}

const Title = ({ content, children }) => {
  return (
    <div style={titleContainer}>
      <h2 className="normal" style={title}>
        {content}
      </h2>
      
      {children}
    </div>
  )
}
export default Title
