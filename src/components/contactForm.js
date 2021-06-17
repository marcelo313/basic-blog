import * as React from "react"
import * as styles from "./contactForm.module.css"

const ContactForm = () => (
    <form name="contact" method="post" data-netlify="true" action="/contact-success" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.nameContainer}>
            <p>
                <label>First Name: <input type="text" name="firstName" /></label>
            </p>
            <p>
                <label>Last Name: <input type="text" name="lastName" /></label>
            </p>
        </div>

        <p>
            <label>Email: <input type="email" name="emailAddress" /></label>
        </p>
        <p>
            <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
)

export default ContactForm