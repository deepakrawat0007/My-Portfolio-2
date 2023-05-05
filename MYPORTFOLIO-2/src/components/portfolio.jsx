import { useState } from "react"
import img1 from "../assets/Screenshot (510).png";
import img2 from "../assets/Screenshot (526).png";
import img3 from "../assets/Screenshot (530).png";
import img4 from "../assets/Screenshot (532).png";
import img5 from "../assets/Screenshot (534).png";
import img6 from "../assets/Screenshot (538).png";
import img7 from "../assets/Screenshot (539).png";
import img8 from "../assets/Screenshot (541).png";
import img9 from "../assets/Screenshot (542).png";
import img10 from "../assets/Screenshot (562).png";
import img11 from "../assets/Screenshot (588).png";
import img12 from "../assets/Screenshot (610).png";
import img13 from "../assets/Screenshot (612).png";
import img14 from "../assets/Screenshot (614).png";
import img15 from "../assets/Screenshot (528).png";
import img16 from "../assets/Screenshot (632).png";
import img17 from "../assets/Screenshot (633).png";

const Porfolio = () => {
  const [data,] = useState([
    { id: 1, name: "Laundry-Cart", stack: "MERN", img: img1, github: "https://github.com/deepakrawat0007/LaundryCart-Client", dplink: "https://laundrycart-ui.onrender.com" },
    { id: 2, name: "InstaClone", stack: "MERN", img: img2, github: "https://github.com/deepakrawat0007/InstaClone-FrontUI-V2", dplink: "https://instaclone-front.onrender.com" },
    { id: 3, name: "TODO-List", stack: "MERN", img: img15, github: "https://github.com/deepakrawat0007/Todo-UI", dplink: "https://todo-ui-2m1r.onrender.com" },
    { id: 4, name: "Task-Manager", stack: "MERN", img: img12, github: "https://github.com/deepakrawat0007/Task-Manager-APP", dplink: "https://task-manager-omr0.onrender.com" },
    { id: 5, name: "FireBase-Storage", stack: "MERN", img: img13, github: "https://github.com/deepakrawat0007/G-Drive-Clone", dplink: "https://g-drive-clone.onrender.com" },
    { id: 15, name: "URL-Shortner", stack: "MERN", img: img16, github: "https://github.com/deepakrawat0007/URL-Shortner", dplink: "https://url-shortning-app.onrender.com" },
    { id: 15, name: "My-PortFolio", stack: "React", img: img17, github: "https://github.com/deepakrawat0007/My-Portfolio-2", dplink: "https://myportfolio-wh32.onrender.com" },
    { id: 6, name: "My-Gallery", stack: "MERN", img: img11, github: "https://github.com/deepakrawat0007/My-Gallery", dplink: "https://my-gallery-app-ui.onrender.com" },
    { id: 7, name: "Book-Search", stack: "React", img: img3, github: "https://github.com/deepakrawat0007/Book-Search", dplink: "https://book-search-app-ui.onrender.com" },
    { id: 8, name: "E-commerce", stack: "React", img: img4, github: "https://github.com/deepakrawat0007/PRT-3", dplink: "https://e-commerce-e1qe.onrender.com" },
    { id: 9, name: "React-Form", stack: "React", img: img5, github: "https://github.com/deepakrawat0007/REACTJS-DAY-7/tree/master/Day7-2", dplink: "https://react-form-2.onrender.com" },
    { id: 10, name: "Qr-Generator", stack: "React", img: img6, github: "https://github.com/deepakrawat0007/REACT-JS-NODE-JS-DAY-10", dplink: "https://qr-generator-5s1p.onrender.com" },
    { id: 11, name: "Toogle-Theme", stack: "React", img: img7, github: "https://github.com/deepakrawat0007/REACT-JS-DAY-9/tree/master/Day9-2", dplink: "https://toogle-theme.onrender.com" },
    { id: 12, name: "Quiz-App", stack: "React", img: img8, github: "https://github.com/deepakrawat0007/ReactJs-Day-8/tree/master/Day8-1", dplink: "https://quiz-app-mcxs.onrender.com" },
    { id: 13, name: "Weather-Appp", stack: "React", img: img10, github: "https://github.com/deepakrawat0007/Weather-App", dplink: "https://weather-app-ui.onrender.com" },
    { id: 14, name: "Jokes-Generator", stack: "React", img: img14, github: "https://github.com/deepakrawat0007/JokesApp", dplink: "https://jokesapp-6mwn.onrender.com" }
  ])
  const [filter , setFilter] = useState(false)
  const [filterList , setFilterList] = useState([])
 
  const handleFilter = (stack)=>{
   switch(stack){
    case "All" :
      setFilter(false)
      break;
    case "MERN" :
      setFilter(true)
      setFilterList(data.filter((app)=> app.stack === "MERN" ))
      break;
    case "React" :
      setFilter(true)
      setFilterList(data.filter((app)=> app.stack === "React" ))
      break;
   }
  }


  return (
    <>
      <main id="main">
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Portfolio</h2>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li  className="filter-active" onClick={()=>handleFilter("All")}>All</li>
                  <li data-filter=".filter-app" onClick={()=>handleFilter("React")}>React-JS</li>
                  <li data-filter=".filter-card" onClick={()=>handleFilter("MERN")}>MERN-Stack</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
               {!filter?data?.map((app)=>(<div className="col-lg-4 col-md-6 portfolio-item filter-web" key={app.id}>
                <div className="portfolio-wrap">
                  <img src={app.img} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{app.name}</h4>
                    <p>{app.stack}</p>
                  </div>
                  <div className="portfolio-links">
                    <a href={app.github} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Github-Link"><i className="bx bxl-github"></i></a>
                    <a href={app.dplink} title="Live Link"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>)):filterList?.map((app)=>(<div className="col-lg-4 col-md-6 portfolio-item filter-web" key={app.id}>
                <div className="portfolio-wrap">
                  <img src={app.img} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{app.name}</h4>
                    <p>{app.stack}</p>
                  </div>
                  <div className="portfolio-links">
                    <a href={app.github} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bxl-github"></i></a>
                    <a href={app.dplink} title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>))}
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

export default Porfolio