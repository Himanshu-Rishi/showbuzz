import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Show = (props) => {
  const { id } = useParams();
  const url = `https://api.tvmaze.com/shows/${id}`;
  const [currentData, setData] = useState({});
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  console.log(currentData);
  useEffect(() => {
    fetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="show_container container">
        <div className="main__image">
          <img
            src={currentData.image ? currentData.image.medium : null}
            alt="showImage"
          />
          <div>
            <a
              className="available"
              href={currentData.url ? currentData.url : ""}
            >
              Available on <i className="uil uil-external-link-alt"></i>
            </a>
          </div>
        </div>
        <div className="show__content">
          <div className="section__title">
            <h1 className="main__heading">
              {currentData ? currentData.name : null}
            </h1>
            <p className="ratings">
              Rating: ⭐{currentData.rating ? currentData.rating.average : "0"}
            </p>
          </div>
          <div className="small__description">
            <p>
              {currentData.language ? currentData.language : "English"} |{" "}
              {currentData.premiered ? currentData.premiered : "0000-00-00"} |{" "}
              {currentData.genres
                ? JSON.stringify(currentData.genres, null, 1)
                    .replace(/['"]+/g, "")
                    .replace("[", "")
                    .replace("]", "")
                : null}
            </p>
          </div>
          <div className="small__description">
            <p>
              <a
                className="available"
                href={currentData.officialSite ? currentData.officialSite : ""}
              >
                Watch Latest Episode{" "}
                <i className="uil uil-external-link-alt"></i>
              </a>{" "}
              | Duration: {currentData.runtime ? currentData.runtime : "00"}mins
            </p>
          </div>
          <div className="description__box">
            <p className="description__text">
              {currentData.summary
                ? currentData.summary.replace("<p>", "").replace("</p>", "")
                : ""}
            </p>
          </div>
        </div>
        <div className="form__button">
          <button>Book Tickets </button>
        </div>
      </div>
    </>
  );
};

export default Show;
