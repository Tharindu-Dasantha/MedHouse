import "../signInUp.css";

function Signup({setSignin}) {
  return (
    <div className="sign-main-container">
        <h1>Sign up</h1>
        <form action="">
            <div className="sign-up-name">
                <label htmlFor="sign-up-name">Name</label>
                <input type="text" name="sign-up-name" id="sign-up-name" placeholder="Full name" required/>
            </div>
            <div className="sign-up-email">
                <label htmlFor="sign-up-email">Email</label>
                <input type="email" name="sign-up-email" id="sign-up-email" placeholder="email@example.com" required/>
            </div>
            <div className="sign-up-pasword">
                <label htmlFor="sign-up-password">Password</label>
                <input type="password" name="sign-up-password" id="sign-up-password" placeholder=" ••••••••••" required/>
            </div>
            <div className="sign-up-con-password">
                <label htmlFor="sign-up-con-password">Confirm Password</label>
                <input type="password" name="sign-up-con-password" id="sign-up-con-password" placeholder=" ••••••••••" required/>
            </div>

            <button type="submit">Sign up</button>
      </form>
      <p>Have an account? <span onClick={()=>{setSignin(()=>"signin")}}>Sign in</span></p>

    </div>
  )
}

export default Signup