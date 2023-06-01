import React, { useEffect, useState } from 'react'
import ShowItem from '../ShowItem/ShowItem';

const Home = () => {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
      return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d));
    };

    useEffect(() => {
      fetchInfo();
    }, []);

  return (
    <>
        <div className="banner">
          <div className="banner__container">
            <div className="slider-container has-scrollbar">
              <div className="slider-item">
                <img
                  src="/assets/Images/lucifer.png"
                  alt="women's latest fashion sale"
                  className="banner-img"
                />
              </div>

              <div className="slider-item">
                <img
                  src="/assets/Images/vampire.jpg"
                  alt="modern sunglasses"
                  className="banner-img"
                />
              </div>

              <div className="slider-item">
                <img
                  src="/assets/Images/moneyheist.jpg"
                  alt="new fashion summer sale"
                  className="banner-img"
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className='shows__heading'>Top Shows</h1>

        <div className="shows">
          {data.map((element) => {
            return (
              <ShowItem
                key={element.show.id}
                summary={element.show}
                img_url={element.show.image.medium}
                language={element.show.language}
                name={element.show.name}
                ratings={element.show.rating.average}
              />
            );
          })}
        </div>
    </>
  );
}

export default Home