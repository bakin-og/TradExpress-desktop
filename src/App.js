
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Instant from './Instant';
import Learn from './Learn';
import Login from './Login';
import Getstarted from './Getstarted';
import Buy from './Buy';
import Sell from './Sell';
import Individual from './Individual';
import Business from './Business';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path='instant' element={<Instant/>}/>
        <Route path='learn' element={<Learn/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='Getstarted' element={<Getstarted/>}/>
        <Route path='Buy' element={<Buy/>}/>
        <Route path='Sell' element={<Sell/>}/>
        <Route path='Individual' element={<Individual/>}/>
        <Route path='Business' element={<Business/>}/>
        

        
     <Route/>
      </Routes>
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
