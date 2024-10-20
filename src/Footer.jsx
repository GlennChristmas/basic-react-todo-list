import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="app-footer">
      <div className="app-footer-grid">
        <div className="copyright">© Glenn Christmas {currentYear}</div>
      </div>
    </div>
  );
};

export default Footer;
