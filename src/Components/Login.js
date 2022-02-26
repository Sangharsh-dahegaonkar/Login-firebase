import React from "react";
import "./style/login.css";

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <>
      <section className="flex">
        <div className="box">
          <div className="innerBox">
            <h1 className="headingo">LOGIN PAGE</h1>
            <hr />

            <div className="back">
              <input
                type="text"
                autoFocus
                required
                value={email}
                className="marginTop"
                placeholder="Abc@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="errorMsg">{emailError}</p>

              <input
                type="password"
                required
                value={password}
                className="copyWidth"
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="errorMsg">{passwordError}</p>
            </div>

            <div>
              {hasAccount ? (
                <>
                  <button className="button" onClick={handleLogin}>
                    Sign in
                  </button>
                  {/* <p>
                    Don't have an account ?
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign up
                    </span>
                  </p> */}
                </>
              ) : (
                <>
                  <button className="button" onClick={handleSignup}>
                    Sign up
                  </button>
                  {/* <p>
                    have an account ?
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign in
                    </span>
                  </p> */}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
