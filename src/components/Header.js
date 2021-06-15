import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Router>
      <Navbar className="bg-dark" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="basic-navbar-nav justify-content-end">
            <Nav className="mr-auto">
              <Link to="/">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/users">Users</Link>
            </Nav>
            <Switch>
              <Route path="/profile">
                <Profile/>
              </Route>
              <Route path="/users">
                <Users/>
              </Route>
              <Route path="/">
                <App/>
              </Route>
            </Switch>
          </Navbar.Collapse>
      </Navbar>
    </Router>
  )
}

export default Header;
