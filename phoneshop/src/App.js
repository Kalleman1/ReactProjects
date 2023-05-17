import { Crud } from './Pages/CRUD';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/footer/Footer';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <>
     <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/crud" element={<Crud />} />
            <Route path=''element={<HomePage/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
