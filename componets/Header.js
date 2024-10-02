const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src="/path/to/your/logo.png" alt="Logo" /> */}
        <h1>hungryBuddy</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Header
