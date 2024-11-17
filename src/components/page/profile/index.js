import React from "react";
import Image from "../../../assets/images/img (2).jpg";
import NewBackgroundImage from "../../../assets/images/Bgg.jpeg"; // Import your new background image

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          <div
            className="page-header-image"
            data-parallax="true"
            style={{ backgroundImage: `url(${NewBackgroundImage})` }} // Use imported image as background
          />
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image">
                <a href="#">
                  <img src={Image} alt="Image" />
                </a>
              </div>
              <div className="h2 title">Gabriela Senduk</div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.facebook.com/gabriela.s.senduk?mibextid=LQQJ4d"
                  rel="tooltip"
                  title="Follow me on Facebook"
                >
                  <i className="fa fa-facebook" />
                </a>
                
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.instagram.com/gabrielasenduk_?igsh=MTNoeTBoNjNyOThibA%3D%3D&utm_source=qr"
                  rel="tooltip"
                  title="Follow me on Instagram"
                >
                  <i className="fa fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
