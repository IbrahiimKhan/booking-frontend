import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
const handleClick =(click)=>{
  if (click==="login") {
   console.log("clicked")
    navigate("/login")
  }
}
console.log(user)
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="d-flex">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HabLu Booking</span>
        </Link>
        </div>
        {user ? (<>
        <img
          
          style={{width:"50px",objectFit:"cover",height:"50px",borderRadius:"50%",marginTop:"15px"}}
          src={`http://localhost:8000/upload/${user?.data?.photo}`}/>
        </>) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button
           onClick={() => handleClick("login")}
            className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
