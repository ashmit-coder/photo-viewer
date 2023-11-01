import { styled } from "styled-components";
// import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <h1>GandOStar</h1>
      </div>
      <div className="profile">
        <button>
          Login
        </button>
        <button>
          Register
        </button>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 18px;
  background: #7e6140;
  min-height: 72px;
  color: white;
  .profile {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  button {
    padding: 8px 36px;
    border-radius: 8px;
    font-size: 18px;
  }
`;
