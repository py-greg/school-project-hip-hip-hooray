function Login() {
  return (
    <header className="App-header">
      <p className="BlackText">
        <b style={{ fontSize: '40px' }}>Login</b>
      </p>
      <input className="loginInput" type="text"  placeholder="Username" />
      <input className="loginInput" type="password"  placeholder="Password" />
      <button className="BlackText" >Login</button>
      <p className="BlackText">
        Don't have an account? <a className="BlackText" href="/register">Register</a>
      </p>
    </header>
  );
}

export default Login;
