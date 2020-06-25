import React from "react";

const ConactUs = () => {
  const data = [
    {
      id: 1,
      icon: "fas fa-home",
      title: "Buttonwood, California",
      desc: "Rosemead, CA 91770",
    },
    {
      id: 2,
      icon: "fas fa-mobile-alt",
      title: "00 (440) 9865 562",
      desc: "Mon to Fri 9am to 6pm",
    },
    {
      id: 3,
      icon: "far fa-envelope",
      title: "support@colorlib.com",
      desc: "Send us your query anytime!",
    },
  ];
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-title">
          <h2 className="heading-2">Get in Touch</h2>
        </div>
        <form action="" className="contact-form">
          <div className="contact-form-group">
            <textarea name="message" id="message" cols="30" rows="9"></textarea>
            <div className="contact-form-group-info">
              {data.map((item) => {
                const { id, icon, title, desc } = item;
                return (
                  <div className="contact-form-group-info-block" key={id}>
                    <div className="icon-inner">
                      <i className={icon}></i>
                    </div>
                    <div className="title-inner">
                      <span>{title}</span>
                      <p>{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="contact-form-group">
            <div className="contact-form-group-inner">
              <input type="text" name="name" placeholder="Enter Your Name" />

              <input
                type="number"
                name="number"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="contact-form-group-inner">
              <input type="email" name="email" placeholder="Enter Your Email" />
            </div>
            <div className="contact-form-group-inner">
              <input
                className="btn-secondary"
                type="submit"
                value="Send Message"
                placeholder="Send Message"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConactUs;
