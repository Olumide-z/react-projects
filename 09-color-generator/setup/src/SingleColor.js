import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false)
  //changing the rgb array to string
  const bcj = rgb.join(',')
  const hex =  rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    //clean up
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article 
      className={`color ${index > 10 && 'color-light'}`} 
      style={{backgroundColor: `rgb(${bcj}`}} 
      onClick={() => {
        setAlert(true);
        //copy to clipboard
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>Copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
