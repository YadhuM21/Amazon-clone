import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './SignIn.css'

function SignIn() {
    
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if(auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <Link to="/"><img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" /></Link>
            <div className="login_container">
               <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button onClick={logIn} type="submit" className="login_signInButton">Sign In</button>
                </form>
                
                <p>
                    By continuing, you agree to Amazon's{" "}
                    <Link to="/login">Conditions of Use</Link> and{" "}
                    <Link to="/login">Privacy Notice</Link>.
                </p>
                {/* <button onClick={register} className="login_registerButton">Create your Amazon account</button> */}
          </div>
        <div className="login__createAccount">
          <p>New to Amazon?</p>
          <button onClick={register}>Create your Amazon account</button>
        </div>
        </div>
    )
}

export default SignIn
