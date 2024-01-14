import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav_main">
        <div className="container align-items-end">
          <a className="logo" href="#">
            <img src={logo} alt="" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Program
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Membership
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn1" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
