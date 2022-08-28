import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const GlobalContext = createContext()

// global object
const data = {
  user: {},
  users: {}
}

// rascunho/teste, vai sair depois
export const loadUsers = async (setSiteData) => {
  const usersRaw = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await usersRaw.json()
  setSiteData({ ...data, users })
}

// AppContext component, provide object data globally
const AppContext = ({ children }) => {
  // siteData store data object
  // setSiteData allow child components to change siteData object
  const [siteData, setSiteData] = useState(data)

  return (
    <GlobalContext.Provider value={{ siteData, setSiteData }}>
      { children }
    </GlobalContext.Provider>
  )
}

AppContext.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppContext
