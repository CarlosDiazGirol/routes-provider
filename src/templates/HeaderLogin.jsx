import { Link, Outlet } from "react-router-dom";

function HeaderLogin () {
  return (
    <>
    <nav>
      <Link to="/">Pepito</Link>
      <Link to="/projects">Cocreta</Link>
      <Link to="/resume">Es mi cumple</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default HeaderLogin