import * as React from "react"
import * as styles from "./contactForm.module.css"

const ContactForm = () => (
    <form className={styles.formContainer} name="contact" method="post" data-netlify="true" action="pages/contact-success" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.nameContainer}>
            <div className={styles.inputGroup}>
                <label htmlFor="firstName">First Name * </label>
                <input type="text" name="firstName" style={{ width: `300px` }}
                    required />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="lastName">Last Name * </label>
                <input type="text" name="lastName" style={{ width: `300x` }}
                    required />
            </div>
        </div>





        <p className={styles.inputGroup}>
            <label htmlFor="email"> Email * </label>
            <input type="email" name="emailAddress" style={{ width: `310px` }}
                required />
        </p>
        <p>
            <label>Message <br></br> <textarea name="message" className={styles.formMessage}></textarea></label>

        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
)

export default ContactForm