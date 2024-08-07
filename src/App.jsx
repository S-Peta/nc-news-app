import 'react-confirm-alert/src/react-confirm-alert.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ArticlesProvider from './components/ArticlesProvider'
import Header from './components/Header'
import SingularArticle from './components/SingularArticle'
import { useState } from 'react'
import { UserContext } from './contexts/User'
import UserProvider from './components/UserProvider'
import NewCommentForm from './components/NewCommentForm'
import TopicProvider from './components/TopicProvider';

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
        <div className='main-container'>
          <TopicProvider />
          <div className='cards-box'>
            <Routes>
              <Route path='/' element={<ArticlesProvider />}/>
              <Route path='/topics/:topic' element={<ArticlesProvider />}/>
              <Route path='/articles/:article_id' element={<SingularArticle />}/>
              <Route path='/articles/:article_id/comments' element={<NewCommentForm />}/>
              <Route path='/users' element={<UserProvider />} />
            </Routes>
          </div>
        </div>
      </>
    </UserContext.Provider>
  )
}

export default App
