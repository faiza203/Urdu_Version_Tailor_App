import { Router, Route, Switch } from 'react-router';
import './App.css';
import { Home, SignUp, SignIn, DashBoard, AddOrder, Measurment, EditMeasurment } from './Components/Elements';
import { history } from './Components/history';
import 'bootstrap/dist/css/bootstrap.min.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/SignUp" component={SignUp}></Route>
          <Route path="/SignIn" component={SignIn}></Route>
          <Route path="/DashBoard" component={DashBoard}></Route>
          <Route path="/Measurment" component={Measurment}></Route>
          <Route path="/Order" component={AddOrder}></Route>
          <Route path="/EditMeasurment" component={EditMeasurment}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
