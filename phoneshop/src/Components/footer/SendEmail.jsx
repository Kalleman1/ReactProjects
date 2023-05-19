import React, {useState} from "react";

const SendEmail = () => {
    const [email, setEmail] = useState('')

    async function joinedNewsLetter() {
        alert(`${email} has signed up to our newsletter!`)
    }

    return(
        <main>
            <div>
                <p className="footer-text">Please enter your Email below <br/> to join our newsletter!</p>
                <input
                type="email"
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                placeholder="Email"
                ></input>
                <button className="button-crud" onClick={joinedNewsLetter}>Sign up!</button>
            </div>
        </main>
    )
}

export default SendEmail;