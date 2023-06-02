import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <h1 className="secion__title_footer">
          Show <span className="secion__title_footer_half">Buzz</span>
        </h1>
        <p className="section__subtitle_footer">
          🎉 Introducing ShowBuzz: Your Ultimate Entertainment Companion! 🎉 Are
          you ready to immerse yourself in a world of unlimited entertainment?
          Look no further than ShowBuzz, the all-in-one platform designed to
          satisfy your cravings for movies, TV shows, and so much more! With
          ShowBuzz, you'll never have a dull moment again.
        </p>
        <div className="nav_links">
          <i className="uil nav__link-footer uil-linkedin"></i>
          <i className="uil nav__link-footer uil-instagram-alt"></i>
          <i className="uil nav__link-footer uil-youtube"></i>
          <i className="uil nav__link-footer uil-github"></i>
          <i className="uil nav__link-footer uil-facebook"></i>
        </div>
        <p className='copyright'>Copyright @2023 Himanshu Rishi</p>
      </div>
    </footer>
  );
}

export default Footer