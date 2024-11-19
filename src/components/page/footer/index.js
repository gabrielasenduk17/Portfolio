import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <a className="cc-facebook btn btn-link" href="#">
          <i className="fa fa-facebook fa-2x " aria-hidden="true" />
        </a>
        <a className="cc-twitter btn btn-link " href="#">
          <i className="fa fa-twitter fa-2x " aria-hidden="true" />
        </a>
        <a className="cc-google-plus btn btn-link" href="#">
          <i className="fa fa-google-plus fa-2x" aria-hidden="true" />
        </a>
        <a className="cc-instagram btn btn-link" href="#">
          <i className="fa fa-instagram fa-2x " aria-hidden="true" />
        </a>
      </div>
      <div className="h4 title text-center">Gabriela Senduk</div>
      <div className="text-center text-muted"></div>
    </footer>
  );
};

export default Footer;
