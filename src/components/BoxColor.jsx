import React from 'react'

function BoxColor(props) {
    const {r, g, b} = props

    const divStyle = { backgroundColor: `rgb(${r}, ${g}, ${b})`}

  return (
    <div style={divStyle}>
        <h5>rgb({r},{g},{b})</h5>
    </div>
  )
}

export default BoxColor