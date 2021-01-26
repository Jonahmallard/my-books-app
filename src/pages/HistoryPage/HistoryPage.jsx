import { Link } from 'react-router-dom';
import './HistoryPage.css';
// import * as usersService from '../../utilities/users-service';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function HistoryPage({ user, setUser }) {

  return (
    <main className="HistoryPage">
      <aside>
        <Logo />
        <Link to="/index/new" className="button btn-sm">NEW ____</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
    </main>
  );
}