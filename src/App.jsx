import { Routes, Route } from 'react-router-dom'
import './App.css'
import ArticlesProvider from './components/ArticlesProvider'
import Header from './components/Header'
import SingularArticle from './components/SingularArticle'

// import { useState } from 'react'
// import { UserContext } from './contexts/User'

function App() {
  // const [loggedUser, setLoggedUser] = useState({})
  // const isLoggedIn = Object.keys(loggedUser).length > 0

  return (
    // <UserContext.Provider value={{ loggedUser, setLoggedUser, isLoggedIn}}>
      <>
        <Header/>
        <Routes>
          <Route path='/' element={<ArticlesProvider/>}/>
          <Route path='/:article_id' element={<SingularArticle />}/>
        </Routes>
      </>
    // </UserContext.Provider>
  )
}

export default App
