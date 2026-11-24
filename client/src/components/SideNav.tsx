import './SideNav.css'
import { Link } from 'react-router'
export function SideNav() {

  return(  
    <div id="mySidenav" className="sidenav">
      <Link to="/">Home</Link>
      <Link to="/">Groups</Link>
      <Link to="/stats">Stats</Link>
      <Link to="/settings">Settings</Link>
    </div>
  )
}