import './App.css';
import Counter from './components/Counter';
import Message from './components/Message';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
      <EventBind/> 
      <FunctionClick/>
      <ClassClick/>
      <Message />
      <Counter/>
      <Greet name='Kasper' heroName='Superman'/>
      <Welcome name='Kasper' heroName='Superman'/> 
    </div>
  );
}

export default App;
