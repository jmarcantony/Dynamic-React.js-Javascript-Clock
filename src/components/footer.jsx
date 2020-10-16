import React from "react"

function Footer() {

    let date = new Date();
    let currentYear = date.getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {currentYear} Joseph Marc Antony</p>
        </footer>
    )
}

export default Footer;