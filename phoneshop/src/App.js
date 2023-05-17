import { Crud } from './Components/crud/Index';
import { ProductCards } from './Components/realtimeData/ProductCards';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Carrousel from './Components/Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
     <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/crud" element={<Crud />} />
            <Route path='' element={<><Carrousel/><p><br></br></p><ProductCards/></>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
