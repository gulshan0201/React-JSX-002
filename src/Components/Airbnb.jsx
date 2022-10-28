import React from 'react'
import Logo from '../Components/Assets/logo.png'

const Airbnb = () => {
  return (
    <>
      <main>
        <h1>The Evolution of
          <br />
          Airbnb's Frontend</h1>
        <p>@spikebrehm</p>
        <span> <img style={{ height: "60px" }} src={Logo} alt="" /> </span>
      </main>
    </>
  )
}

export default Airbnb