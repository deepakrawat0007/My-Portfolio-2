
const About = () =>{
    return(
        <main id="main">

        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container">
    
            <div className="section-title">
              <h2>About</h2>
              <p>A motivated professional who is good at problem solving and programming, with an emphasis on writing clean and maintainable code
Experienced with data Structures/Algorithms and designing optimal solutions. Aspiring to make a career in Software engineering with
a focus on full stack development.</p>
            </div>
    
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src="assets/img/profile.jpg" style={{border:"5px solid gray" , borderRadius:"10px" , boxShadow:"3px 3px 3px 3px gray"}} className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Full-Stack Developer</h3>
                <p className="fst-italic">
                As a fresher Full stack developer with a strong foundation in the MERN (MongoDB, Express.js, React, Node.js) stack and HTML, CSS, and JavaScript, I am eager to contribute my skills to a dynamic team of developers.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>16 Jan 2002</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9315203229</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Greater Noida, Uttarpradesh</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>deepakrawat3738@gmail.com</span></li>
                    </ul>
                  </div>
                </div>
                <p>
                As a full stack developer, I understand the importance of creating high-quality, maintainable code, and I am committed to implementing best practices and adhering to industry standards. I am a dedicated and motivated team player who enjoys collaborating with others to deliver successful projects. With a strong desire to continuously learn and improve, I am confident that I can make valuable contributions to any development team..
                </p>
              </div>
            </div>
    
          </div>
        </section>
        </main>
    )
}
export default About