import { Router, Route, Switch } from 'react-router';
import './App.css';
import { Home } from './Components/Elements';
import { history } from './Components/history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
