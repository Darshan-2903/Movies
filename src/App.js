import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Detail from './Components/Detail';
import Header from './Components/Header';
import Movies from './Components/Movies';




function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Movies/>}/>
      <Route path='/detail' element={<Detail/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
