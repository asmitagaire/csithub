import "./Footer.css";
import footercsithub from "../../assets/CsitHub.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={footercsithub} alt='csithub' className='footercsithub' />
          <p>CsitHub offers high-quality notes, syllabus, and sample questions for CSIT students. Our mission is to simplify learning by providing well-organized and reliable study materials.</p>
        </div>
        <div className="footer-links">
          <div>
            <p>Home</p>
            <p>Notes</p>
            <p>Dev Zone</p>
            <p>Sample Questions</p>
            <p>Syllabus</p>
          </div>
          <div>
            <p>Contact Us</p>
            <p>Ask Now</p>
            <p>Terms & Conditions</p>
            <p>Privacy & Policy</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © CSIT Hub | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer