function Register() {
  return (
    <header className="App-header">
      <p className="BlackText">
        <b>Register</b>
      </p>
      <input className="loginInput" type="text" placeholder="Username" />
      <input className="loginInput" type="password" placeholder="Password" />
      <input className="loginInput" type="password" placeholder="Confirm Password" />
      <button className="BlackText">Register</button>
      <p className="BlackText">
        Already have an account? <a className="BlackText" href="/login">Log in</a>
      </p>
    </header>
  );
}

export default Register;
