// import React, {useState} from 'react';
// import './Login.css';
// import { Link, useHistory } from "react-router-dom";
// import { auth } from './firebase';

// function Login() {
//     const history = useHistory();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const login = event => {
//         event.preventDefault();

//         auth.signInWithEmailAndPassword(email,password)
//             .then((auth)=> {
//                 //logged in, redirect to homepage...
//                 history.push("/");
//             })
//             .catch((e)=> alert(e.message));
//     }

//     return (
//         <div className="login">
//             <Link to="/">
//                 <img src="clearJob_Logo.jpeg" alt="" className="login_logo" />
//             </Link>
//             <div className="login_container">
//                 <h1>Login</h1>
//                 <form>
//                     <h5>Username</h5>
//                     <input value={email} onChange={event=>setEmail(event.target.value)} type="email" />
//                     <h5>Password</h5>
//                     <input value={password} onChange={event=>setPassword(event.target.value)} type="password" />
//                     <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
//                 </form>
//                 <div>
//                     <p>Don't have an account?</p><Link to="/register">Register</Link>
//                 </div>
//                 {/* <button className="login_registerButton">Create your clearJob account</button> */}
//             </div>
//         </div>
//     )
// }

// export default Login
