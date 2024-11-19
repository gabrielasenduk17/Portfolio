import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Header = () => {
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
    <header>
      <div className="profile-page sidebar-collapse">
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
          color-on-scroll={400}
        >
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href="#" rel="tooltip">
                {header.header1}
              </a>
              <button
                className="navbar-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navigation"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#about">
                    {header.header2}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#skill">
                    {header.header3}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#experience">
                    {header.header4}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#contact">
                    {header.header5}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
