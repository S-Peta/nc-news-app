import { Routes, Route } from 'react-router-dom'
import './App.css'
import ArticlesProvider from './components/ArticlesProvider'
import Header from './components/Header'


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<ArticlesProvider/>}/>
        <Route path='/:article_id' element={<ArticlesProvider/>}/>
        {/* <Route path='/:article_id' element={<ArticlesProvider/>}/> */}
      </Routes>
    </>
  )
}

export default App
