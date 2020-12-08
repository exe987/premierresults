import React from "react";

const Footer = () => {
  return (
    <footer className="footer has-background-black">
      <div className="content">
        <p className="has-text-white">
          Creado por{" "}
          <strong className="has-text-white">SOTO, ANGEL EXEQUIEL</strong>
        </p>
        <p>
          <a
            className="has-text-white"
            href="https://github.com/exe987"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <i className="fab fa-github"> </i> /exe987{" "}
          </a>
        </p>
        <p>
          <a
            className="has-text-white"
            href="https://www.linkedin.com/in/exesoto/"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <i className="fab fa-linkedin"></i>/exesoto
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
