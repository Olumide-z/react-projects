import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, socials } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linksHeight)
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }else{
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  // remember to set the link-container class in the media query
  // to height: auto !important. because of the above
  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo' />
        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          {links.map((link) => {
            const {id, url, text} = link;
            return(
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <ul className='social-icons'>
        {socials.map((social) => {
          const {id, url, icon} = social;
          return(
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
