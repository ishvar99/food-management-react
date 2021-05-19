import React from 'react'
import './Snackbar.css'
const Snackbar = ({show,message}) => {
 return (
  <>
  {show&&
  <div id="snackbar" className='show'>{message}</div>
  }
  </>
 )
}

export default Snackbar
