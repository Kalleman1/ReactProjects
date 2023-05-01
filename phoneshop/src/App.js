import { Crud } from './Components/crud/Index';
import { RealtimeData } from './Components/realtimeData/Index';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
     <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/crud" element={<Crud />} />
        </Routes>
      </BrowserRouter>
    </div>
    
    <RealtimeData></RealtimeData>
    </>
  );
}

export default App;
