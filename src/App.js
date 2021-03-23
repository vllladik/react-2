
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import { TaskProvider } from './Components/TaskContext/TaskContext';
import TaskList from './Components/TaskList/TaskList';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom"
import TaskUpdate from './Components/TaskUpdate/TaskUpdate';

function App() {  return (
    <TaskProvider>
      <Router>
       <div className="App">
        
      </div>

      <Switch>
       <Route exact path="/updateTask/:id" component={TaskUpdate}/>
       <Route exact path="/" component={TaskList} />
       
      </Switch>

      </Router>
    </TaskProvider>
   
  );
}

export default App;

