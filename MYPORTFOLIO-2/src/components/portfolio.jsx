import { useEffect, useState } from "react";
import axios from "axios";
const API = "https://portfolio-server-05cm.onrender.com";

const Porfolio = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(false);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/AllProjects`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        alert(e.message);
      });
  }, []);

  const handleFilter = (stack) => {
    switch (stack) {
      case "All":
        setFilter(false);
        break;
      case "MERN":
        setFilter(true);
        setFilterList(data.filter((app) => app.stack === "MERN"));
        break;
      case "React":
        setFilter(true);
        setFilterList(data.filter((app) => app.stack === "React"));
        break;
    }
  };

  useEffect(() => {
    if (data?.length > 0) {
      const element = document.getElementById("portfolio-item");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [data]);

  return (
    <>
      <main id="main">
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
            </div>

            {data.length === 0 ? (
              <div style={{ textAlign: "center" }}>"Loading....."</div>
            ) : (
              <>
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li
                        className="filter-active"
                        onClick={() => handleFilter("All")}
                      >
                        All
                      </li>
                      <li
                        data-filter=".filter-app"
                        onClick={() => handleFilter("React")}
                      >
                        React-JS
                      </li>
                      <li
                        data-filter=".filter-card"
                        onClick={() => handleFilter("MERN")}
                      >
                        MERN-Stack
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row portfolio-container">
                  {!filter
                    ? data?.map((app) => (
                        <div
                          className="col-lg-4 col-md-6 portfolio-item filter-web"
                          key={app.id}
                        >
                          <div className="portfolio-wrap">
                            <img src={app.img} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>{app.name}</h4>
                              <p>{app.stack}</p>
                            </div>
                            <div className="portfolio-links">
                              <a
                                href={app.github}
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox"
                                title="Github-Link"
                              >
                                <i className="bx bxl-github"></i>
                              </a>
                              <a href={app.dplink} title="Live Link">
                                <i className="bx bx-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))
                    : filterList?.map((app) => (
                        <div
                          className="col-lg-4 col-md-6 portfolio-item filter-web"
                          key={app.id}
                        >
                          <div className="portfolio-wrap">
                            <img src={app.img} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>{app.name}</h4>
                              <p>{app.stack}</p>
                            </div>
                            <div className="portfolio-links">
                              <a
                                href={app.github}
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox"
                                title="Web 3"
                              >
                                <i className="bx bxl-github"></i>
                              </a>
                              <a href={app.dplink} title="More Details">
                                <i className="bx bx-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Porfolio;
