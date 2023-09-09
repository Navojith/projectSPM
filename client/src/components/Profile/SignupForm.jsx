import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

const SignupForm = () => {
    const [error , setError] = useState(false)
    const [email , setEmail] = useState(false)
    const [password , setPassword] = useState(false)

    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        console.log("handle")

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate("/getstarted")
                // ...
            })
            .catch((error) => {
                setError(true)
            });
    }

    return (
        <form onSubmit={handleSignup}>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up</h1>
    </div>
    <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" onChange={e=>setPassword(e.target.value)}/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SIGNUP</button>
        </div>
        {error && <span>Incorrect email or password!</span>}
      </div>
    </div>
  </div>
</div>
</form>
    );
}

export default SignupForm;