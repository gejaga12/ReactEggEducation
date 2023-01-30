import React, { useState } from "react";

export const Footer = () => {

  const [clicks, setClicks] = useState(0);

  const year = new Date().getFullYear();

  const creadorName = "Gerardo Javier García";

  const handleClick = () => {
      
    setClicks(clicks + 1);

  }

  return (
    <div className="d-flex align-items-center justify-content-center">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">
          &copy; {year} {creadorName} Frontend Developer = {clicks}
        </p>

        <span
          onClick={handleClick}
          className="col-md-4 d-flex align-items-center justify-content-center wd-1">
          <img className="App-logo h-25 w-25" src="dog.png" alt="logo-giratorio" />
        </span>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
