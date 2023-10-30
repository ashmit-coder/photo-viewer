import logo from "./test.png"
import NavButtons from './navbar_buttons'
const Navbar = ({onLogin})=>{
    return(
        <div className="navbar">
        <img src={logo} id="logo_image" alt="peach"></img>
        <NavButtons Login={onLogin}/>
        
        </div>
    )
}

export default Navbar;