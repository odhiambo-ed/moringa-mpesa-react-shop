import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/Cart'>
            <h1>Checkout</h1>
          </Route>
          <Route path='/login'>
            <h1>Login</h1>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
      <Header />
      <Home />
    </div>
  );
}

export default App;
