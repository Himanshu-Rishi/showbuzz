import React from 'react'
import { Link } from 'react-router-dom';
const ShowItem = (props) => {

  return (
    <Link to={'/'} className="showcase__container">
      <div className="shows__item_container">
        <div className="showcase__banner">
          <img
            src={props.img_url}
            alt="demo_image"
            className="show__img"
            width="300"
          />
        </div>

        <div className="showcase__content">
          <p className="showcase__language">
            {props.language}
          </p>

          <h3>
            <p className="showcase__title">
              {props.name}
            </p>
          </h3>

          <div className="price-box">
            <p className="price">⭐ {props.ratings ? props.ratings : 0}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ShowItem