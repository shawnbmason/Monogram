import "../styles/navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="catigories">
        <div className="header">Monogram</div>

        <a href="/">HOW IT WORKS</a>
        <a href="/">WORKFLOWS</a>
        <a href="/">DOWNLOADS</a>
        <a href="/">SUPPORT</a>
        <a href="/" className="shop">
          SHOP
        </a>
      </div>
    </div>
  );
}
