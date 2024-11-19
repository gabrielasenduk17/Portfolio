import NewBackgroundImage from "../../../assets/images/Bgg.jpeg";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Profile = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const profileRef = ref(db, "profile");
    onValue(profileRef, (snapshot) => {
      const data = snapshot.val();
      setProfile(data);
    });
  }, []);
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
                  <img src={profile.image || ""} alt="Image" />
                </a>
              </div>
              <div className="h2 title">{profile.name}</div>
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
