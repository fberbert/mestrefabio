import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import P from 'prop-types'
import { FaAngleUp } from 'react-icons/fa'

// import global stylesheet
import './css/style.css'

// AppContext defines the GlobalContext of the website
// state shared between all the pages
import AppContext from './contexts/AppContext'

// common Header and Footer in the entire site
import Header from './components/Header'
import Footer from './components/Footer'

// import of individual components/pages
import Home from './components/Home'

const SectionModel = (props) => {
  const { sectionName } = props
  return (
    <div>
      {sectionName}
      { (new Array(20).fill(1)).map((e,i) => <br key={i} />) }
    </div>
  )
}

SectionModel.propTypes = {
  sectionName: P.string.isRequired
}

// main section / content part of the website
const MainContainer = ({ children }) => (
  <div className="main-container">
    {children}
  </div>
)

MainContainer.propTypes = {
  children: P.node.isRequired
}

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const App = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  const ScrollToTop = () => (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <FaAngleUp
          className="icon-position icon-style" 
          onClick={goToTop}
        />
      )}{" "}
    </div>
  )

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  return (
    <React.StrictMode>
      <AppContext>
        <BrowserRouter>
          <Header />
          <MainContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<SectionModel sectionName="Página não encontrada" />} />
            </Routes>
            <ScrollToTop/>
          </MainContainer>
          <Footer />
        </BrowserRouter>
      </AppContext>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
