import { Crud } from './Pages/CRUDPage';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './Pages/MainPage';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <>
     <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/crud" element={<Crud />} />
            <Route path=''element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
