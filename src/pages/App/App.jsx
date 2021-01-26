import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewPage from '../NewPage/NewPage';
import HistoryPage from '../HistoryPage/HistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/index/new">
              <NewPage user={user} setUser={setUser} />
            </Route>
            <Route path="/index">
              <HistoryPage user={user} setUser={setUser} />
            </Route>
            <Redirect to="/index" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
