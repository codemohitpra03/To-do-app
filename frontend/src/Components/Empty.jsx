import React from 'react'
import empty from '../assets/empty.png'
const Empty = () => {
  return (
    <center>
        <img src={empty} style={{width:"20rem"}} />
        <h1>Nothing to show</h1>
    </center>
  )
}

export default Empty