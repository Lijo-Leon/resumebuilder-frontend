import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import PageNotFound from './pages/PageNotFound'
import History from './pages/History'
import ResumeGeneratorPage from './pages/ResumeGeneratorPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import Steps from './components/Steps'
import Preview from './components/Preview'

import * as React from 'react';

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='' element={<LandingPage/>}/>
        <Route path='History' element={<History/>}/>
        <Route path='ResumeGeneratorPage' element={<ResumeGeneratorPage/>}/>
        <Route path='form' element={<Form/>}/>
        <Route path='Steps' element={<Steps/>}/>
        <Route path='Preview' element={<Preview/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    <Footer />
    </>
  )
}

export default App















