import { Link } from 'react-router-dom'
import '../../css/Header/MenuBar.css'

const MenuBar = () => (
  <div className="menubar-container">
    <nav className="navbar-container">
      <div className="menu-container">
        <ul className="main-menu-ul">
          <li> <Link to="/artigos">Artigos</Link> </li>
          <li> <Link to="/forum">Fórum</Link> </li>
          <li> <Link to="/scripts">Scripts</Link> </li>
          <li> <Link to="/screenshots">Screenshots</Link> </li>
          <li> <Link to="/enviar">Enviar</Link> </li>
          <li> <Link to="/sobre">Sobre</Link> </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default MenuBar
