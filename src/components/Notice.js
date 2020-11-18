import React, {useContext} from "react";
import DataContext from "../context/DataContext";

const Notice = ({ openCloseModal, key }) => {


  //CONTEXT INFO
  const DatadeContext = useContext(DataContext);
  const { notice  } = DatadeContext;



  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={openCloseModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title is-4">{ notice.title }</p>
          <button className="delete" onClick={openCloseModal} />
        </header>
        <div className="modal-content">
          <p className="image is-4by3">
            <img src={notice.urlToImage} alt={notice.title} />
          </p>
        </div>
        <section className="modal-card-body">
          <div className="content">{notice.content}</div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={openCloseModal}>
            Cancel
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Notice;
