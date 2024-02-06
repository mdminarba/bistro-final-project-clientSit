// App.js

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Search from './Search';

const Pdfs = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">হোম</Link>
            </li>
            <li>
              <Link to="/search">সার্চ</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Pdfs;
