import $ from 'jquery';
import {useEffect} from "react";


const Skill = () =>{
    useEffect(() => {
        $('.progress .progress-bar').each(function() {
          var $bar = $(this);
          var progress = setInterval(function() {
            var currWidth = parseInt($bar.attr('aria-valuenow'));
            var maxWidth = parseInt($bar.attr('aria-valuemax'));
            if (currWidth >= maxWidth) {
              clearInterval(progress);
            } else {
              $bar.css('width', currWidth+'%');
              $bar.attr('aria-valuenow', currWidth+10);
            }
          }, 200);
        });
      }, []);
    return (
        <>
       <main id="main">
        
    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>"Full Stack Developer with Expertise in MongoDB, Express, React, Node.js, JavaScript, HTML, CSS, SQL, and DSA"</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="85"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">SQL <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="80"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="progress">
              <span className="skill">REACT <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="85"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">NODEJS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">MONGO-DB / EXPRESS JS <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="90"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">DSA<i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="90"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
        </main> 
        </>
    )
}

export default Skill