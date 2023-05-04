import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  const arr = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/",
      name: "Home",
    },
  ];

  const arr2 = [
    {
      path: "/Login",
      name: "Login",
    },
    {
      path: "/Profile",
      name: "Profile",
    },
    {
      path: "/Settings",
      name: "Settings",
    },
    {
      path: "/Singhout",
      name: "Sign out",
    },
  ]

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              {/* /Nav Links */}
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                {arr.map((item, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <Link
                        to={item.path}
                        className="nav-link align-middle px-0"
                      >
                        <i className="fs-4 bi-house"></i>{" "}
                        <span className="ms-1 d-none d-sm-inline">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">loser</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                 {arr2.map((item, index) => {
                  return     <li >
                  <Link to={item.path} className="dropdown-item" >
                  {item.name}
                    
                  </Link>
                </li>
                 })}
              
                
                </ul>
              </div>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
