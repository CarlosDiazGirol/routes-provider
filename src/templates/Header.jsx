import { Link, Outlet } from "react-router-dom";

function Header () {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Header