import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Jobarouter</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
    </div>
  );
};

export default Navbar;
