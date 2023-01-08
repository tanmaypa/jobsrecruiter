
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Jobs from './components/Jobs/Jobs';
import Invalid from './components/Invalid/Invalid';
function App() {
  return (
  <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route  path="/"  exact element={<Home/>}/>
   <Route  path="/login" exact  element={<Login/>}/>
   <Route  path="/jobs"   element={<Jobs/>}/>
   <Route  path="*"   element={<Invalid/>}/>
   </Routes>
 </BrowserRouter>
  );
}

export default App;