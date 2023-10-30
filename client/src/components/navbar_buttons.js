const NavButtons = ({Login})=>{
    return(
        <div className="NavButtons">
        <button className="btn" onClick={Login}> Login </button> 
        <button className="btn" > SignUp </button>
        </div>
    )
}

export default NavButtons;