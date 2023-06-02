import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="navbar__container container">
        <div>
          <h1 className="website__title">
            <a href="/" style={{color: 'white'}}>
            Show <span className="website__title_half">Buzz</span>
            </a>
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