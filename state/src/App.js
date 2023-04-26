import './App.css';
import Counter from './components/Counter';
import Message from './components/Message';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Inline></Inline> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <NameList/> */}
      {/* <UserGreeting/>
      <ParentComponent/>
      <EventBind/> 
      <FunctionClick/>
      <ClassClick/>
      <Message />
      <Counter/>
      <Greet name='Kasper' heroName='Superman'/>
      <Welcome name='Kasper' heroName='Superman'/>  */}
    </div>
  );
}

export default App;
