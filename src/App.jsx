
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './pages/HomePages'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Pokeinfo from './pages/Pokeinfo'
import PokedexPages from './pages/PokedexPages'

function App() {

  
  

  return (
 <div>
 <h1>Pokedex</h1>

 <Routes>
  <Route path= '/' element = {<HomePages />} />

  <Route element= {<ProtectedRoutes />} >
  <Route path= '/pokedex' element = {<PokedexPages />} />
  <Route path= '/pokemon/:name' element = {<Pokeinfo />} />
  </Route>

 </Routes>

 </div>
  )
}

export default App
