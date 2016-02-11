import { Router, Route, browserHistory } from 'react-router';
import Home from './components/home.jsx';
import About from './components/about.jsx';

const MyRouter = () => (
  <Router history={browserHistory} >
    <Route name='home' path="/" component={Home} />
    <Route name='about' path="/about" component={About} />
  </Router>
);


export default MyRouter;
