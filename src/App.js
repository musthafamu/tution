
import './App.css';
import {  Route,Routes} from 'react-router-dom'
import Navbar from './Pages/Navbar';
import Main from './Pages/Main';
import Course from './Routes/course';
import Contacts from './Routes/Contacts';
import Apply from './Pages/apply';
import Second from './Pages/second';


function App() {
  return (
  <>
<Navbar/>


 <Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/course' element={<Course/>}/>
  <Route path='/contact' element={<Contacts/>}/>
  <Route path='/apply' element={<Apply/>}/>

</Routes> 
  </>

  );
}

export default App;
