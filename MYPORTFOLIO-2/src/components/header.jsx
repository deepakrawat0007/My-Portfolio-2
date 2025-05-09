import { useState } from "react";
import PopUpModal from "./popUpModal";

const Header = () => {
  const [popUp, setPopUp] = useState(false);

  const handlePop = () => {
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
  };
  return (
    <>
      {popUp ? <PopUpModal closePopUp={closePopUp} /> : ""}

      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profileImage.jpeg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Deepak Rawat</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="https://github.com/deepakrawat0007" className="twitter">
                <i className="bx bxl-github" title="github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-rawat-98a533243"
                className="linkedin"
              >
                <i className="bx bxl-linkedin" title="linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/rajrawatrr89"
                className="instagram"
              >
                <i className="bx bxl-instagram" title="Instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-google"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto active"
                  style={{ cursor: "pointer" }}
                  onClick={handlePop}
                >
                  <i className="bx bx-home"></i> <span>Admin Panel</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
