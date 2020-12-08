import React, { useContext, useEffect, useState } from "react";
import Notice from "./Notice";
import DataContext from "../context/DataContext";
const News = () => {
  //CONTEXT INFO
  const DatadeContext = useContext(DataContext);
  const { getNews, news, readNotice } = DatadeContext;

  //LOCAL STATE
  const [notice, showNotice] = useState(false);

  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  //MODAL
  const openCloseModal = (a) => {
    if (notice) {
      showNotice(false);
    } else {
      showNotice(true);
      readNotice(a);
    }
  };

  return (
    <div className="columns is-centered is-multiline is-gapless">
      {news.map((data, key) => (
        <div key={key} className="card column is-3 m-1">
          <div className="card-image">
            <figure className="image is-2by1">
              <img src={data.urlToImage} alt={data.author} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-5">
                  <a onClick={() => openCloseModal(key)} href='#!'> {data.title} </a>
                </p>
              </div>
            </div>
            <div className="content">
              <div className="media-content">
                <p className="is-success">{data.description}</p>
              </div>
            </div>
            {!notice ? null : <Notice openCloseModal={openCloseModal} />}
          </div>
        </div>
      ))}
    </div>
  );
};
export default News;
