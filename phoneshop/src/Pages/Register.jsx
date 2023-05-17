import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import StartFirebase from "../Components/firebaseConfig/Index";
import { Alert } from "react-bootstrap";

const Register = () => {
    const navigate = useNavigate();
    const {auth} = StartFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            Alert('User created successfully')
            navigate("../")
        })
        .catch ((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }

    return(
        <main>
            <section>
                <div className="main">
                    <div>
                        <h1>Register new account</h1>
                        <form>
                            <div className="child">
                                <label htmlFor="email-address">Email address</label>
                                <input 
                                type="email"
                                label="Email address"
                                value = {email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email address"></input>
                            </div>

                            <div className="child">
                                <label htmlFor="password">Password</label>
                                <input
                                type="password"
                                label="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Password"></input>
                            </div>
                            <button className="button-crud"
                            type="submit"
                            onClick={onSubmit}>Register</button>
                        </form>

                        <p>
                            Already have en account? {' '}
                            <NavLink to={"/login"}>Sign in</NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Register;