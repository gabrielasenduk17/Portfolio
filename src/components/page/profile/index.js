import React from "react";
import Image from "../../../assets/images/anthony.jpg"
const Profile = () => {
  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          <div
            className="page-header-image"
            data-parallax="true"
            style={{ backgroundImage: 'url("images/cc-bg-1.jpg")' }}
          />
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image">
                <a href="#">
                  <img src={Image} alt="Image" />
                </a>
              </div>
              <div className="h2 title">Anthony Barnett</div>
              
              
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="#"
                  rel="tooltip"
                  title="Follow me on Facebook"
                >
                  <i className="fa fa-facebook" />
                </a>
                
                
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="#"
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
