import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>CSIT HUB</h2>
        </div>
        <div className="footer-links">
          <div>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact</p>
            <p>FAQ’s</p>
            <p>Privacy & Policy</p>
          </div>
          <div>
            <p>Notes</p>
            <p>Sample Questions</p>
            <p>Syllabus</p>
            <p>Ask Now</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © CSIT Hub | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
