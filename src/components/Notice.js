import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const Notice = ({ openCloseModal, key }) => {
  //CONTEXT INFO
  const DatadeContext = useContext(DataContext);
  const { notice } = DatadeContext;
  return (
    <div className="modal is-active modal-fx-fadeInScale">
      <div className="modal-background" onClick={openCloseModal} />
      <button className="delete" onClick={openCloseModal} />
      <div className="modal-card">
        <div className="modal-content">
          <p className="image is-4by3">
            <img src={notice.urlToImage} alt={notice.title} />
          </p>
        </div>
        <header className="modal-card-body">
          <p className="modal-card-title is-6">{notice.title}</p>
        </header>
        <section className="modal-card-body">
          <div className="content">{notice.content}</div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={openCloseModal} href='#!'>
            Cancel
          </a>
        </footer>
      </div>
    </div>
  );
};
export default Notice;
