import React from "react";
import Logo from "../images/AvatarMaker.svg";

const Nav = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <img src={Logo} alt="Avatar" className="logo-img" />
        </div>
        <div className="nav-icon" onClick={() => setShow(!show)}>
          {show ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-align-justify"></i>
          )}
        </div>
      </div>
      <div className="navigation">
        <nav className={!show && "navigation__nav"}>
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href=" " className="navigation__link">
                <span>01</span>About Natous
              </a>
            </li>
            <li className="navigation__item">
              <a href=" " className="navigation__link">
                <span>02</span>Your benfits
              </a>
            </li>
            <li className="navigation__item">
              <a href=" " className="navigation__link">
                <span>03</span>Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href=" " className="navigation__link">
                <span>04</span>Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href=" " className="navigation__link">
                <span>05</span>Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
