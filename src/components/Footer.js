import React from 'react';
import '../assets/styles/footer.css';
import {currentDate} from "./helpers/date";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <h3 className="logo">MyCO<sub style={{color: "yellow"}}>2</sub>Flight</h3>
        <p>&#169; {currentDate} develop by Artem</p>
      </div>
    </div>
  );
};

export default Footer;
