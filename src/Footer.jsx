export function Footer() {
  return (
    <div className="footer">
  {/* Left Side */}
  <div className="footer-left">
    <p>© 2025 Bake My Cake. All Rights Reserved.</p>

    <div className="logo">
      <img src="/cakes/facebook.png" alt="Facebook" />
      <img src="/cakes/instagram.png" alt="Instagram" />
      <img src="/cakes/twitter.png" alt="Twitter" />
    </div>
  </div>

  {/* Right Side */}
  <div className="footer-right">
    <div className="footer-section">
      <h4>Know Us</h4>
      <ul>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Need Help</h4>
      <ul>
        <li>FAQ</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>
  </div>
</div>

  );
}

export default Footer;