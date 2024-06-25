import { useState ,useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = ()=> {
    const [btnNameReact,setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className="flex justify-between bg-pink-100 shadow-md mb-3">
            <div className="logo-container p-7 m-4" >
                <img className="w-56" src= {LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4">
                    <li className="px-4">Online Status:{onlineStatus? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to ="/about">About Us</Link></li>
                    <li className="px-4"><Link to ="contact">Contact Us</Link></li>
                    <li className="px-4">{loggedInUser}</li>
                    <button className="login" onClick={()=>{
                       btnNameReact==="Login"? setBtnName("Logout"): setBtnName("Login")}} >{btnNameReact}</button>
                    <li></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;