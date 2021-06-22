import * as React from "react"
import * as styles from "./contactForm.module.css"

const ContactForm = () => (
    <form className={styles.formContainer} name="contact" method="post" data-netlify="true" action="/contact-success" data-netlify-honeypot="bot-field">
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
            <label>Email: <input type="email" name="emailAddress" size="30" /></label>
        </p>
        <p>
            <label>Message: <br></br> <textarea name="message" className={styles.formMessage}></textarea></label> 
            
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
)

export default ContactForm