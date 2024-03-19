import {useState, useEffect} from 'react';
import "../assets/styles/header.css";
import {NavLink} from "react-router-dom";
import {navLinksData} from "../data/navLinksData";

const Header = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);

  const toggleMobile = () => {
    setIsMobileActive(!isMobileActive)
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isMobileActive ? 'hidden' : 'auto';
  }, [isMobileActive])

  return (
    <header className="header">
      <div className="header_wrapper">
        <h2 className="logo">
          <span>MyCO<sub style={{color: "yellow"}}>2</sub>Flight</span>
        </h2>
        <nav className={isMobileActive ? `navigation active ` : "navigation"}>
          {navLinksData.map(link => (
            <NavLink
              key={link.id}
              to={link.linkTo}
              className={(navData) => (navData.isActive ? "activeLink" : "link")}
              onClick={() => setIsMobileActive(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
        <div className={isMobileActive ? "button active" : "button"}
             onClick={toggleMobile}
        />
      </div>
    </header>
  );
}

export default Header;
