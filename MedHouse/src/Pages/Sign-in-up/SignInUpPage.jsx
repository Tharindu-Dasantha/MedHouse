import "./signInUp.css"
import Signin from "./Subfiles/Signin"
import Signup from "./Subfiles/Signup"
import { useState } from "react"

function SignInUpPage() {
  
  const [signin, setSignin] = useState(true);
  

  return (
    <div className="sign-in-up-page-container">

      {signin ? <Signin setSignin ={setSignin} /> : <Signup setSignin ={setSignin} />}
      
      
    </div>
  )
}

export default SignInUpPage