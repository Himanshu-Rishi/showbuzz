import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="navbar__container container">
        <div>
          <h1 className="website__title">
            Show <span className="website__title_half">Buzz</span>
          </h1>
        </div>
        <div>
          <a href="/" className="navbar__links">
            Home
          </a>
          <a href="/" className="navbar__links">
            About
          </a>
          <a href="/" className="navbar__links">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar