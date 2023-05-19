import React from "react";

const Contact = () => {
    const companyName = "PhoneShoppen A/S";
    const address = "Østerlunden 18 st. 1";
    const city = "Odense C";
    const zip = 5000;
    const phone = 31959477;
    const email = "kaper1@live.dk"
    return(
        <main>
            <div>
                <p className="footer-text">{companyName}</p>
                <p className="footer-text">{address}</p>
                <p className="footer-text">{zip} {city}</p>
                <p className="footer-text">Phone: {phone}</p>
                <p className="footer-text">Email: {email}</p>
            </div>
        </main>
    )
}

export default Contact;