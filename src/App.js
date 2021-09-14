import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './components/EmployeeList';
import EmployeeContextProvider from './contexts/EmployeeContext';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from './components/Signup';
function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
        <Router>
    
    <Switch>
    <Route path="/signup" component={SignUp}/>
          <EmployeeContextProvider>
            <EmployeeList />
          </EmployeeContextProvider>
         
          </Switch>
    </Router>
        </div>
      </div>
    </div>

  );
}

export default App;