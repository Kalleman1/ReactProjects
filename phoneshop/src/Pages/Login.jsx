import React, {useContext, useState} from "react";
import StartFirebase from "../Components/firebaseConfig/Index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthContext";

const Login = () => {
    const {auth} = StartFirebase();
    const navigate = useNavigate();
    const {loginUser} = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const loggedInUser = userCredential.user;
            loginUser(loggedInUser);
            console.log(loggedInUser)
            navigate("../")
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    }
    return (
        <main>
            <section>
                <div className="main">
                    <h1>Login to your account</h1>
                    <p>Currently logged in as</p>
                    <form>
                        <div className="child">
                            <label htmlFor="email-address">Email address</label>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="child">
                            <label htmlFor="password">Password</label>
                            <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div className="child">
                            <button className="button-crud" onClick={onLogin}>Login</button>
                        </div>
                    </form>
                    <p className="text-sm, text-center">
                        No account yet? {' '}
                        <NavLink to={"/login/register"}>
                            Sign up
                        </NavLink>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Login;