import { Routes, Route } from 'react-router-dom'
import './App.css'
import ArticlesProvider from './components/ArticlesProvider'
import Header from './components/Header'
import SingularArticle from './components/SingularArticle'
import { useState } from 'react'
import { UserContext } from './contexts/User'
import UserProvider from './components/UserProvider'

function App() {
  const [loggedUser, setLoggedUser] = useState({
    username: 'happyamy2016',
    name: 'Amy Happy',
    avatar_url:
      'https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729'
  })
  const isLoggedIn = Object.keys(loggedUser).length > 0

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser, isLoggedIn}}>
      <>
        <Header/>
        <Routes>
          <Route path='/' element={<ArticlesProvider />}/>
          <Route path='/:article_id' element={<SingularArticle />}/>
          <Route path='/users' element={<UserProvider />} />
        </Routes>
      </>
    </UserContext.Provider>
  )
}

export default App
