import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User'
import { BrowserRouter,Route,Routes ,Link} from 'react-router-dom';
import Oldbook from './components/Oldbook';
import Newbook from './components/Newbook';
import Login from './components/Login';
import Dashbrd from './components/Dashbrd';
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
         <li>
          <Link to ='/user/1'>user1</Link>
         </li>
         <li>
          <Link to ='/user/2'>user2</Link>
         </li>
         <li>
          <Link to ='/books/old_book'>oldbooks</Link>
         </li>
         <li>
          <Link to ='/books/new_book'>newbooks</Link>
         </li>
         <li>
          <Link to ='/login'>login</Link>
         </li>
         <li>
          <Link to ='/dashboard'>dashboard</Link>
         </li>
        
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user/:id' element={<User/>}/>
<Route path='/books'>
  <Route path='old_book' element={<Oldbook/>}/>
  <Route path='New_book' element={<Newbook/>}/>
</Route>
<Route path='login' element={<Login/>}/>
<Route path='Dashboard' element={<Dashbrd/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
