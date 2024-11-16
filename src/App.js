import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="profile-page sidebar-collapse">
          <nav
            className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
            color-on-scroll={400}
          >
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-brand" href="#" rel="tooltip">
                  Creative CV
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
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#skill">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#experience">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="page-content">
        <div>
          <div className="profile-page">
            <div className="wrapper">
              <div
                className="page-header page-header-small"
                filter-color="green"
              >
                <div
                  className="page-header-image"
                  data-parallax="true"
                  style={{ backgroundImage: 'url("images/cc-bg-1.jpg")' }}
                />
                <div className="container">
                  <div className="content-center">
                    <div className="cc-profile-image">
                      <a href="#">
                        <img src="images/anthony.jpg" alt="Image" />
                      </a>
                    </div>
                    <div className="h2 title">Anthony Barnett</div>
                    <p className="category text-white">
                      Web Developer, Graphic Designer, Photographer
                    </p>
                    <a
                      className="btn btn-primary smooth-scroll mr-2"
                      href="#contact"
                      data-aos="zoom-in"
                      data-aos-anchor="data-aos-anchor"
                    >
                      Hire Me
                    </a>
                    <a
                      className="btn btn-primary"
                      href="#"
                      data-aos="zoom-in"
                      data-aos-anchor="data-aos-anchor"
                    >
                      Download CV
                    </a>
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
                        title="Follow me on Twitter"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                      <a
                        className="btn btn-default btn-round btn-lg btn-icon"
                        href="#"
                        rel="tooltip"
                        title="Follow me on Google+"
                      >
                        <i className="fa fa-google-plus" />
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
          <div className="section" id="about">
            <div className="container">
              <div className="card" data-aos="fade-up" data-aos-offset={10}>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="card-body">
                      <div className="h4 mt-0 title">About</div>
                      <p>
                        Hello! I am Anthony Barnett. Web Developer, Graphic
                        Designer and Photographer.
                      </p>
                      <p>
                        Creative CV is a HTML resume template for professionals.
                        Built with Bootstrap 4, Now UI Kit and FontAwesome, this
                        modern and responsive design template is perfect to
                        showcase your portfolio, skills and experience.{" "}
                        <a
                          href="https://templateflip.com/templates/creative-cv/"
                          target="_blank"
                        >
                          Learn More
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="card-body">
                      <div className="h4 mt-0 title">Basic Information</div>
                      <div className="row">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Age:</strong>
                        </div>
                        <div className="col-sm-8">24</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Email:</strong>
                        </div>
                        <div className="col-sm-8">anthony@company.com</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Phone:</strong>
                        </div>
                        <div className="col-sm-8">+1718-111-0011</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Address:</strong>
                        </div>
                        <div className="col-sm-8">
                          140, City Center, New York, U.S.A
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Language:</strong>
                        </div>
                        <div className="col-sm-8">English, German, French</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="skill">
            <div className="container">
              <div className="h4 text-center mb-4 title">
                Professional Skills
              </div>
              <div
                className="card"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">HTML</span>
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
                          <span className="progress-value">80%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">CSS</span>
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
                          <span className="progress-value">75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">JavaScript</span>
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
                          <span className="progress-value">60%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">SASS</span>
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
                          <span className="progress-value">60%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">Bootstrap</span>
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
                          <span className="progress-value">75%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">Photoshop</span>
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
                            style={{ width: "70%" }}
                          />
                          <span className="progress-value">70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container cc-education">
              <div className="h4 text-center mb-4 title">Education</div>
              <div className="card">
                <div className="row">
                  <div
                    className="col-md-3 bg-primary"
                    data-aos="fade-right"
                    data-aos-offset={50}
                    data-aos-duration={500}
                  >
                    <div className="card-body cc-education-header">
                      <p>2013 - 2015</p>
                      <div className="h5">Master's Degree</div>
                    </div>
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-left"
                    data-aos-offset={50}
                    data-aos-duration={500}
                  >
                    <div className="card-body">
                      <div className="h5">Master of Information Technology</div>
                      <p className="category">University of Computer Science</p>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
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
                    <div className="card-body cc-education-header">
                      <p>2009 - 2013</p>
                      <div className="h5">Bachelor's Degree</div>
                    </div>
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-left"
                    data-aos-offset={50}
                    data-aos-duration={500}
                  >
                    <div className="card-body">
                      <div className="h5">Bachelor of Computer Science</div>
                      <p className="category">University of Computer Science</p>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
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
                    <div className="card-body cc-education-header">
                      <p>2007 - 2009</p>
                      <div className="h5">High School</div>
                    </div>
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-left"
                    data-aos-offset={50}
                    data-aos-duration={500}
                  >
                    <div className="card-body">
                      <div className="h5">Science and Mathematics</div>
                      <p className="category">School of Secondary board</p>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="contact">
            <div
              className="cc-contact-information"
              style={{ backgroundImage: 'url("images/staticmap.png")' }}
            >
              <div className="container">
                <div className="cc-contact">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="card mb-0" data-aos="zoom-in">
                        <div className="h4 text-center title">Contact Me</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="card-body">
                              <form
                                action="https://formspree.io/your@email.com"
                                method="POST"
                              >
                                <div className="p pb-3">
                                  <strong>Feel free to contact me </strong>
                                </div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="input-group">
                                      <span className="input-group-addon">
                                        <i className="fa fa-user-circle" />
                                      </span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required="required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="input-group">
                                      <span className="input-group-addon">
                                        <i className="fa fa-file-text" />
                                      </span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="Subject"
                                        placeholder="Subject"
                                        required="required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="input-group">
                                      <span className="input-group-addon">
                                        <i className="fa fa-envelope" />
                                      </span>
                                      <input
                                        className="form-control"
                                        type="email"
                                        name="_replyto"
                                        placeholder="E-mail"
                                        required="required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="form-group">
                                      <textarea
                                        className="form-control"
                                        name="message"
                                        placeholder="Your Message"
                                        required="required"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <button
                                      className="btn btn-primary"
                                      type="submit"
                                    >
                                      Send
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="card-body">
                              <p className="mb-0">
                                <strong>Address </strong>
                              </p>
                              <p className="pb-2">
                                140, City Center, New York, U.S.A
                              </p>
                              <p className="mb-0">
                                <strong>Phone</strong>
                              </p>
                              <p className="pb-2">+1718-111-0011</p>
                              <p className="mb-0">
                                <strong>Email</strong>
                              </p>
                              <p>anthony@company.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <div className="h4 title text-center">Anthony Barnett</div>
        <div className="text-center text-muted">
          <p>
            © Creative CV. All rights reserved.
            <br />
            Design -{" "}
            <a
              className="credit"
              href="https://templateflip.com"
              target="_blank"
            >
              TemplateFlip
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
