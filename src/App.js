import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link,Switch,Route  } from 'react-router-dom';
import CWelcome from './components/CWelcome'
import Count from './components/Count';
import ListDemo1 from './components/ListDemo1';
import PCompnent from './components/PComponent';
import LifeCycleDemo from './components/LifeCycleDemo';
import ApiCallDemo from './components/ApiCallDemo';
import AxiosAPIDemo from './components/AxiosAPIDemo';
import Demo_Form from './components/Demo_Form';
import Demo_RegForm from './components/Demo_RegForm';

const data=[
        
  {id1:1,name:'student1'},
  {id1:2,name:'student2'},
  {id1:3,name:'student3'}]

const ndata=['data1','data2','data3'];

function App() {
  return (
    <div className="APP">


      {/* <ListDemo1 data={data} ndata={ndata}/>
      <PCompnent/> */}
     {/* <Router>
     
      <ul>
        <li><Link to='welcome'>Welcome</Link></li>
        <li><Link to='count'>Count</Link></li>
        <li><Link to='listdemo'>List</Link></li>
      </ul>
           <Route exact path='/welcome' component={CWelcome}/>
           <Route exact path='/count' component={Count}/>
           <Route exact path='/listdemo' component={ListDemo1}/>
     </Router> */}
     {/* <LifeCycleDemo/> */}
     {/* <ApiCallDemo/> */}
     <AxiosAPIDemo/>
     {/* <Demo_RegForm/> */}

    </div>
  );
}

export default App;
