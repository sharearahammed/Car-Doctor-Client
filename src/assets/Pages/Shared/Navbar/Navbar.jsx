import { Link, NavLink } from "react-router-dom";
import logo from '../../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .then(error =>{
      console.error(error)
    })
  }
    const navItems = <>
    <NavLink to={'/'}><li><a>Home</a></li></NavLink>
    <NavLink to={'#'}><li><a>About</a></li></NavLink>
    <NavLink to={'#'}><li><a>Service</a></li></NavLink>
    <NavLink to={'#'}><li><a>Blog</a></li></NavLink>
    <NavLink to={'#'}><li><a>Contact</a></li></NavLink>
    {
      user?.email ? 
      <>
      <li><Link to={'/bookings'} className="">My Bookings</Link></li>
      <li><button onClick={handleLogOut} className="btn bg-red-500 text-white">Logout</button></li>
      </> 
      : <NavLink to={'/login'}><li><a>Login</a></li></NavLink>
    }
    
    

    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost text-xl">
        <img className="h-[50px]" src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-error">Appointment</button>
  </div>
</div>
    );
};

export default Navbar;