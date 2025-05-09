const About = () => {
  return (
    <main id="main">
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="assets/img/profileImage.jpeg"
                style={{
                  border: "5px solid gray",
                  borderRadius: "10px",
                  boxShadow: "3px 3px 3px 3px gray",
                }}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Full-Stack Developer</h3>
              <p className="fst-italic">
                Full-Stack Developer with 2 years of experience, specializing in
                building scalable web applications using JavaScript, React.js,
                Angular.js, and Node.js. I have a strong foundation in both
                front-end and back-end development, with expertise in
                microservices architecture and RESTful APIs. Proficient in
                working with MongoDB, Commercetools to create flexible,
                API-driven e-commerce solutions. I also leverage Google Cloud
                for deploying and managing cloud native applications. Known for
                writing clean, maintainable code and delivering high-quality
                solutions in fast-paced, collaborative environments
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>16 Jan 2002</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+91 9315203229</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong>{" "}
                      <span>Greater Noida, Uttarpradesh</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>23</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>deepakrawat3738@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
