import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Contact = () => {
  const [contact, setContact] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "contact");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);
  return (
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
                  <div className="h4 text-center title">{contact.contact1}</div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card-body">
                        <form
                          action="https://formspree.io/your@email.com"
                          method="POST"
                        >
                          <div className="p pb-3">
                            <strong>{contact.contact2} </strong>
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
                              <button className="btn btn-primary" type="submit">
                                {contact.contact3}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <p className="mb-0">
                          <strong>{contact.address} </strong>
                        </p>
                        <p className="pb-2">
                        {contact.address1}
                        </p>
                        <p className="mb-0">
                          <strong>{contact.phone}</strong>
                        </p>
                        <p className="pb-2">{contact.phone1}</p>
                        <p className="mb-0">
                          <strong>{contact.email}</strong>
                        </p>
                        <p>{contact.email1}</p>
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
  );
};

export default Contact;
