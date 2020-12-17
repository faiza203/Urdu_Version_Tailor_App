import { Router, Route, Switch } from 'react-router';
import './App.css';
import { Home, SignUp } from './Components/Elements';
import { history } from './Components/history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/SignUp" component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
