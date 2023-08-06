import "../signInUp.css";


function Signin({setSignin}) {
  return (
    <div className="sign-main-container" >
      <h1>Sign in</h1>
      <form action="">
        <div className="sign-in-email">
          <label htmlFor="sign-in-email">Email</label>
          <input type="email" name="sign-in-email" id="sign-in-email" placeholder="email@example.com" required/>
        </div>
        <div className="sign-in-password">
          <label htmlFor="sign-in-password">Password</label>
          <input type="password" name="sign-in-password" id="sign-in-password" placeholder=" ••••••••••" required/>
        </div>

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <span onClick={()=>{setSignin(prev => !prev)}}>Sign up</span></p>

    </div>
  )
}

export default Signin