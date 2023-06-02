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
            HOME
          </a>
          <a href="/" className="navbar__links">
            ABOUT
          </a>
          <a href="/" className="navbar__links">
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar