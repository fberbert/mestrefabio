import { Link } from 'react-router-dom'

const Logo = () => (
  <div className="headerlogo-container">
    <Link to="/">
      <img
        className="vol-logo"
        src="/img/logo-vol-150-branco.png"
        alt="Viva o Linux logo"
      />
    </Link>
  </div>
)

export default Logo
