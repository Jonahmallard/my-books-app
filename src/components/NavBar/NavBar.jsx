import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <NavLink exact style={{textDecoration: 'none', color: 'black'}} exact to='/'>Home</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact style={{textDecoration: 'none', color: 'black'}} exact to='/index/new'>New</NavLink>
      &nbsp;&nbsp;
        {/* <NavLink exact to='/index'>Books LIST</NavLink>
        &nbsp;&nbsp;&nbsp;
        <NavLink exact to='/index/new'>ADD BOOK</NavLink> */}
      <span>Welcome, <strong>{user.name}</strong></span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut} style={{textDecoration: 'none', color: 'black'}}>Log Out</Link>
    </nav>
  );
}