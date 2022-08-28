import {
  FaFacebookSquare,
  FaRss,
  FaTelegram,
  FaTwitterSquare
} from 'react-icons/fa'

import '../../css/Header/SocialBar.css'

const SocialBar = () => (
  <div className="headersocialbar-container">
    <div className="socialbar-container">
      <ul className="socialbar">
        <li> <a href="/index.rdf" rel="noreferrer" target="_blank" title="Acompanhe nosso Feed"><FaRss aria-label="RSS" /></a></li>
        <li> <a href="https://www.facebook.com/vivaolinux" rel="noreferrer" target="_blank" title="Visite-nos no Facebook"><FaFacebookSquare aria-label="Facebook" /></a></li>
        <li> <a href="https://twitter.com/vivaolinux_" rel="noreferrer" target="_blank" title="Siga-nos no Twitter"><FaTwitterSquare aria-label="Twitter" /></a></li>
        <li> <a href="https://telegram.me/vivaolinuxOficial" rel="noreferrer" target="_blank" title="Siga-nos no Telegram"><FaTelegram aria-label="Telegram" /></a></li>
      </ul>
    </div>
  </div>
)

export default SocialBar
