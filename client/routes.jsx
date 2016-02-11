import { Router, Route, browserHistory } from 'react-router';
import Home from './components/home.jsx';
import About from './components/about.jsx';

const MyRouter = () => (
  <Router history={browserHistory} >
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </Router>
);


export default MyRouter;
