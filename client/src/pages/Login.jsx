import styled from "styled-components";
import axios from "axios";

const Login = () => {

  const submitform = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = {
      username,
      password,
    };
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        console.log(res.data);
        if (res.data === "success") {
          window.location.href = "/gallery";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <OuterBox>
      <LoginPage>
        <h1>Login</h1>
        <form action="" className="lp">
          <label>
            <h3>Username</h3>
            <input type="text" name="" id="username" />
          </label>
          <label>
            <h3>Password</h3>
            <input type="password" name="" id="password" />
          </label>
          <button id="btn" onClick={submitform}>Login</button>
        </form>
      </LoginPage>
    </OuterBox>
  );
};

export default Login;

const OuterBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage = styled.div`
  h1 {
    text-align: center;
  }
  background: #9797976d;
  height: 500px;
  width: 500px;
  .lp {
    text-align: center;
    display: flex;
    gap: 18px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
