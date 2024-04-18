import "./Header.css"

function Header({ scrollOn }) {
  return (
    <div className={`header-wrapper ${scrollOn ? "header-dark" : ""}`}>
      <div className="header-logo">
        <a href="/home" className="header-logoblack"><img src="fotaka\LogoFF.png" alt="image not found" /></a>
        <a href="/home" className="header-logowhite"><img src="fotaka\LogoFF.png" alt="image not found" /></a>
      </div>
      <nav className="header-navbar" >
        <a href="/locations">Ubicaciones</a>
        <a href="/cars">Coches</a>
      </nav>
    </div>
  )
}
export default Header;