
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Jobs from './components/Jobs/Jobs';
function App() {
  return (
  <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route  path="/"  exact element={<Home/>}/>
   <Route  path="/login" exact  element={<Login/>}/>
   <Route  path="/jobs"   element={<Jobs/>}/>
   </Routes>
 </BrowserRouter>
  );
}

export default App;