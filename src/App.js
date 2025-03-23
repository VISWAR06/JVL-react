import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter,Route,Routes ,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>
          <Link to ='/'>home</Link></li>
        <li>
          <Link to ='/about'>about</Link></li>
        <li>
          <Link to ='/contact'>contact</Link></li>
         
        
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
