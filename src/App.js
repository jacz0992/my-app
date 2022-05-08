import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import PlayersListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail';
import ItemPanales from './components/ItemPanales'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/:itemId' element={ <ItemDetail /> } />
        <Route path='/panales' element={ <ItemPanales />} />
      </Routes>
    </BrowserRouter>
    </>
  
    );
}



export default App;
