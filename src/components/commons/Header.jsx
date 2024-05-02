import "./Header.css"
import "./headerscroll"
function Header({ scrollOn }) {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <img src="./fotos/wLogo.png" alt="" />
        </div>
        <nav className="header-navbar">
          <a href="#">Inicio</a>
          <a href="#">Ubicaciones</a>
          <a href="#">Personajes</a>
          <a href="#">Coches</a>
        </nav>
      </div>
    </header>
  )
}
export default Header;