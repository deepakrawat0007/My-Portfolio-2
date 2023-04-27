import CountUp from 'react-countup';
import React, { useEffect, useState, useRef } from 'react';
const Fact = () =>{
  const [startCounting, setStartCounting] = useState(false);
  const targetRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(targetRef.current);
        }
      });
    }, { threshold: 0.5 }); // Set the threshold to 0.5 or any value as needed

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

    return(
        <main id="main">
            <section id="facts" className="facts">
      <div className="container">

        <div className="section-title">
          <h2>Facts</h2>
        </div>

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span 
               className="purecounter" style={{margin:"0" , padding:"0" , display:"flex"}} ref={targetRef}>   {startCounting && <CountUp start={0} end={25} duration={5} />}+</span>
              <p style={{marginLeft:"1%"}}><strong>Total Projects</strong><br></br> Worked On</p>
            </div>
          </div>


          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="count-box">
              <i className="bx bxl-react" style={{fontSize:"4em" , marginTop:"0.3em"}}></i>
              <span  className="purecounter" style={{margin:"0" , padding:"0" , display:"flex"}} ref={targetRef}>   {startCounting && <CountUp start={0} end={14} duration={5} />}+</span>
              <p style={{marginLeft:"1%"}}><strong>ReactJs Projects</strong> <br></br>Worked On</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="count-box">
              <i className="bx bxl-facebook" style={{fontSize:"4em" , marginTop:"0.3em"}}></i>
              <span  className="purecounter" style={{margin:"0" , padding:"0" , display:"flex"}} ref={targetRef}>   {startCounting && <CountUp start={0} end={6} duration={8} />}+</span>
              <p style={{marginLeft:"1%"}}><strong>MERN Projects</strong> <br></br>Worked On</p>
            </div>
          </div>

        </div>

      </div>
    </section>
            </main>

    )
}

export default Fact;