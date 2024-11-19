import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Experience = () => {
  const [header, setHeader] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <div className="section" id="experience">
      <div className="container cc-experience">
        <div className="h4 text-center mb-4 title">Education</div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body cc-experience-header">
                <p>2008 - 2014</p>
                <div className="h5">SD ADVENT BITUNG</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body">
                <p>
                  Selama di sekolah dasar, saya membangun fondasi untuk
                  pertumbuhan akademik dan pribadi. Masa ini ditandai dengan
                  rasa ingin tahu dan eksplorasi, di mana saya mempelajari
                  keterampilan dasar seperti membaca, menulis, dan berhitung.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body cc-experience-header">
                <p>2014 - 2017</p>
                <div className="h5">SMP NEGERI 2 BITUNG</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body">
                <p>
                  Selama masa SMP, saya menjalani perjalanan yang penuh dengan
                  eksplorasi akademik dan pertumbuhan pribadi. Tahap ini menjadi
                  dasar bagi pembelajaran saya di masa depan, memungkinkan saya
                  membangun keterampilan yang kuat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body cc-experience-header">
                <p>2017 - 2020</p>
                <div className="h5">SMA UNKLAB AIRMADIDI</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body">
                <p>
                  Selama masa SMA, saya menjalani perjalanan pembelajaran yang
                  penuh makna dan penemuan diri. Tahap pendidikan ini tidak
                  hanya memberikan dasar akademis yang kuat, tetapi juga
                  menawarkan berbagai kesempatan untuk pengembangan diri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
