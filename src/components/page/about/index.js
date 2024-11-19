import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";


const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-offset={10}>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">{about.about1}</div>
                <p>{about.name}</p>
                <p>
                  {about.desc}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">{about.about2}</div>
                <div className="row">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">{about.age}</strong>
                  </div>
                  <div className="col-sm-8">{about.age1}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">{about.email}</strong>
                  </div>
                  <div className="col-sm-8">{about.email1}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">{about.phone}</strong>
                  </div>
                  <div className="col-sm-8">{about.phone1}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">{about.address}</strong>
                  </div>
                  <div className="col-sm-8">
                  {about.address1}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">{about.language}</strong>
                  </div>
                  <div className="col-sm-8">{about.language1}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
