const Resume = () => {
  return (
    <>
      <main id="main">
        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Deepak Rawat</h4>
                  <p>
                    <em>
                      Full-Stack Developer with 2 years of experience,
                      specializing in building scalable web applications using
                      JavaScript, React.js, Angular.js, and Node.js. I have a
                      strong foundation in both front-end and back-end
                      development, with expertise in microservices architecture
                      and RESTful APIs. Proficient in working with MongoDB,
                      Commercetools to create flexible, API-driven e-commerce
                      solutions. I also leverage Google Cloud for deploying and
                      managing cloud native applications. Known for writing
                      clean, maintainable code and delivering high-quality
                      solutions in fast-paced, collaborative environments
                    </em>
                  </p>
                  <ul>
                    <li>Greater-Noida , UttarPradesh</li>
                    <li>+91 9315203229</li>
                    <li>deepakrawat3738@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>BootCamp in FullStack Development</h4>
                  <h5>2022 - 2023</h5>
                  <p>
                    <em>The 10x Academy, Hyderabad</em>
                  </p>
                  <p>Learned Javascript , HTML / CSS and MERN Tech-Stack</p>
                </div>
                <div className="resume-item">
                  <h4>Bachelor of Commerce</h4>
                  <h5>2019 - 2022</h5>
                  <p>
                    <em>University of Delhi (SOL)</em>
                  </p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Experience</h3>
                <div className="resume-item">
                  <h4>
                    Application Developer - IBM <h5>(April 2024 - Present)</h5>
                  </h4>
                  <ul>
                    <li>Design, Develop, and Maintain Applications</li>
                    <li>Collaborate with Cross-Functional Teams</li>
                    <li>
                      Translate Business Requirements into Technical Solutions
                    </li>
                    <li>Code Optimization and Performance Tuning</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>
                    Software Engineer - Icreon{" "}
                    <h5>(April 2023 - April 2024)</h5>
                  </h4>
                  <p>
                    <em>Tech Stack - Next.Js / Node.Js / Commercetools</em>
                  </p>
                  <ul>
                    <li>
                      Migrated a legacy e-commerce platform from Oracle ATG to
                      Commercetools, enhancing performance, flexibility, and
                      maintainability.
                    </li>
                    <li>
                      Developed and maintained full-stack applications using the
                      MERN stack ( MongoDB, Express.js, React.js, Node.js).
                    </li>
                    <li>
                      Integrated and extended Commercetools APIs for a modular,
                      headless commerce architecture.
                    </li>
                    <li>
                      Deployed cloud-native applications and services on Google
                      Cloud Platform (GCP) to ensure high availability and
                      scalability.
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>
                    Engineer-L1-Technology - Change CX{" "}
                    <h5>(July 2023 - March 2024)</h5>
                  </h4>
                  <p>
                    <em>Tech Stack - Next.Js / Node.Js / Commercetools</em>
                  </p>
                  <ul>
                    <li>
                      Applied JavaScript, HTML & CSS to enhance website
                      front-end architecture and optimization techniques to
                      noticeably improve web page performance, user experience,
                      and loading speed.
                    </li>
                    <li>
                      Built interactive web applications using ReactJS and
                      JavaScript.
                    </li>
                    <li>
                      Implemented React-Redux for state management and
                      scalability, ensuring efficient data flow across
                      components.
                    </li>
                    <li>
                      Integrated JWT for authentication and used MongoDB
                      real-time database storage, along with Stripe for secure
                      payment processing in the E-commerce app
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Resume;
