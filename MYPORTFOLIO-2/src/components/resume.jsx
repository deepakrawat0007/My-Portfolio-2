
const Resume = () =>{
    return(
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
              <p><em>A motivated professional who is good at problem solving and programming, with an emphasis on writing clean and maintainable code
Experienced with data Structures/Algorithms and designing optimal solutions. Aspiring to make a career in Software engineering with
a focus on full stack development.</em></p>
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
              <p><em>The 10x Academy, Hyderabad</em></p>
              <p>Learned Javascript , HTML / CSS and MERN Tech-Stack</p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Commerce</h4>
              <h5>2019 - 2022</h5>
              <p><em>University of Delhi (SOL)</em></p>
            </div>
            <div className="resume-item">
              <h4>Senior Secondary Class XII</h4>
              <h5>2017 - 2019</h5>
              <p><em>Angels Public School (New Delhi)</em></p>
            </div>
            <div className="resume-item">
              <h4>Secondary Class X</h4>
              <h5>2015 - 2017</h5>
              <p><em>Angels Public School (New Delhi)</em></p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Personal-Projects</h3>
            <div className="resume-item">
              <h4>Laundry Cart (Team Project)</h4>
              <p><em>Tech Stack - MERN</em></p>
              <ul>
                <li>Built Sign-In/Sign-Up/Forgot-PassWord API's & UI.</li>
                <li>Used Json Web Token(JWT) for Authentication & Authorization.</li>
                <li>Used form-Validations & Express-Validators for accuracy and security of user data.</li>
                <li>Utilized Git&GitHub for version control and code management.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>InstaGram Clone</h4>
              <p><em>Tech Stack - MERN</em></p>
              <ul>
                <li>Built Profile/Create-Post/login/register API's & UI.</li>
                <li>Used Cloudinary for Storing the Images Upload form local.</li>
                <li>Bcrypt Module used for user data security.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>URL Shortner</h4>
              <p><em>Tech Stack - MERN</em></p>
              <ul>
                <li>Users can shorten the long url links.</li>
                <li>Used ShortId for generating short unique Ids.</li>
                <li>Used react-toast for alert Messages.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
        </main>
        </>
    )
}

export default Resume;