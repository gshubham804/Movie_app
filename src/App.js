import './App.css';
import Navbar from './Components/navbar';
import Banner from './Components/banner';
import Movies from './Components/movies';
import Favourite from './Components/Favourite';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={[<Banner/>,<Movies/>]} />
    {/* <Route path='/' component={Banner}/> */}
    <Route exact path='/favourites' element={<Favourite/>} />
    </Routes>
    </Router>
  );
}

export default App;
