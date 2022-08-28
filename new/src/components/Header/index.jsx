import React, { useState } from 'react'
import '../../css/Header/onepage.css'

const navLinks = [
  { navLinkId: 'Início', scrollToId: 'slider'}, 
  { navLinkId: 'Vantagens', scrollToId: 'vantagens'}, 
  { navLinkId: 'Automações', scrollToId: 'automacoes'}, 
  { navLinkId: 'Como funciona', scrollToId: 'comofunciona'}, 
  { navLinkId: 'Tecnologia', scrollToId: 'tecnologia'}, 
  { navLinkId: 'Contato', scrollToId: 'contato'}, 
]

const NavLink = ({ navLinkId, scrollToId, activeNavLinkId, setActiveNavLinkId }) => {
  const handleClick = () => {
    setActiveNavLinkId(navLinkId)
    const element = document.getElementById(scrollToId)
    element.scrollIntoView({
      behavior: 'smooth', 
      block: "start"
    })
  }

  return (
    <li className="menu-item">
      <span 
        id={navLinkId}
        className={activeNavLinkId === navLinkId ? 'activeClass menu-link' : 'menu-link'} 
        onClick={handleClick}
        >{navLinkId}</span>
    </li>
  )
}

const Nav = () => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('')

  return (
    <nav className="primary-menu">
      <ul
        className="one-page-menu menu-container"
        data-easing="easeInOutExpo"
        data-speed="1250"
        data-offset="65">
        {navLinks.map(
          ({navLinkId, scrollToId}) =>
            <NavLink 
              key={scrollToId}
              navLinkId={navLinkId} 
              scrollToId={scrollToId} 
              activeNavLinkId={activeNavLinkId}
              setActiveNavLinkId={setActiveNavLinkId} 
            />
        )}
      </ul>
    </nav>
  )
}

const Header = () => (
  <section id="topo">
		<header id="header" className="full-header header-size-custom" data-sticky-shrink="false">

			<div id="header-wrap">
				<div className="container">
					<div className="header-row">

						<div id="logo">
							<img src="/img/logo-mestre-fabio.png" alt="MestreFabio.com" />
            </div>

            <div id="primary-menu-trigger">
              <svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
            </div>

            <Nav/>

					</div>
				</div>
			</div>
			<div className="header-wrap-clone"></div>
		</header>
  </section>
)

export default Header
