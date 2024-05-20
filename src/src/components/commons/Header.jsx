import "./Header.css"
import "./headerscroll"
function Header({}) {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <img src="./fotos/wLogo.png" alt="" />
        </div>
        <nav className="header-navbar">
          <a href="/home">Inicio</a>
          <a href="/ubicaciones">Ubicaciones</a>
          <a href="/coches">Coches</a>
        </nav>
      </div>
    </header>
  )
}
export default Header;