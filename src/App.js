import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import UserList from './pages/UserList/UserList';
import User from './pages/User/User';
import NewUser from './pages/NewUser/NewUser';

import './App.css';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/users" component={UserList}/>
          <Route path="/user/:userId" component={User}/>
          <Route path="/newUser" component={NewUser}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
