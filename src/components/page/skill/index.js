import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Skills = () => {
  const [skill, setSkill] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const skillRef = ref(db, "skill");
    onValue(skillRef, (snapshot) => {
      const data = snapshot.val();
      setSkill(data);
    });
  }, []);
  return (
    <div className="section" id="skill">
      <div className="container">
        <div className="h4 text-center mb-4 title">{skill.skill1}</div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">{skill.lang1}</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset={10}
                      data-aos-duration={2000}
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "80%" }}
                    />
                    <span className="progress-value">{skill.num}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">{skill.lang2}</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset={10}
                      data-aos-duration={2000}
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "75%" }}
                    />
                    <span className="progress-value">{skill.num2}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">{skill.lang3}</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset={10}
                      data-aos-duration={2000}
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    />
                    <span className="progress-value">{skill.num3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
