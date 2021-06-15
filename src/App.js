import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Dashboard </Link></li>
          <li><Link to={'/profile'} className="nav-link">Profile</Link></li>
          <li><Link to={'/users'} className="nav-link">Users</Link></li>
        </ul>
      </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/users' component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App; 
