import './styles/main.scss'
import Search from './components/Search'
import Footer from './components/Footer'

import React from 'react';


function App() {

  return (
    <>
      <main className="home">
        <Search />
      </main>
      <Footer />
    </>
  )
}

export default App