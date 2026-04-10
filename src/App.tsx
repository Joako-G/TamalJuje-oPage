import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePages } from './pages/HomePages'
import { MenuPage } from './pages/MenuPage'
import { OrederPage } from './pages/OrderPage'
import { Header } from './components/layout/Header/Header'
import { Nav } from './components/layout/Nav/Nav'
import { WhatsAppButton } from './components/layout/WhatsAppButton/WhatsAppButton'

function App() {

  return (
    <BrowserRouter>

      <div className='container-fluid d-flex flex-column p-0 m-0 min-vh-100 '>
        <Header />
        <main className='container-fluid w-100 px-0 content'>
          <Routes>
            <Route path='/' element={<HomePages />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/order' element={<OrederPage />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Nav />
      </div>

    </BrowserRouter>
  )
}

export default App
