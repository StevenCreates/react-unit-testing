import * as React from "react";

function Login({ onSubmit }) {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;
    setUser({
      username: username.value,
      password: password.value,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username-field'>Username</label>
        <input id='username-field' name='username' type='text' />
      </div>
      <div>
        <label htmlFor='password-field'>Password</label>
        <input id='password-field' name='password' type='password' />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default Login;
