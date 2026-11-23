import './SideNav.css'

export function SideNav() {

  return(  
    <div id="mySidenav" className="sidenav">
      <a href="#">Home</a>
      <a href="/">Groups</a>
      <a href="/stats">Stats</a>
      <a href="/settings">Settings</a>
    </div>
  )
}