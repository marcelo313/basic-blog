import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import * as styles from './emailSignup.module.css'

import { IconContext } from "react-icons"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

const EmailSignup = () => {
    const breakpoints = useBreakpoint();
    return (
        <div className={styles.signupContainer}>
            <h3>Join me on this journey to unlock Endless Possibilities in life.</h3>
            <div>
                <form name="emailSignup" method="post" data-netlify="true" action="/email-signup-success" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="emailSignup" />

                    <div className={styles.emailContainer}>
                        
                        <div className={styles.emailInputContainer}>
                            <label>Email: <input type="email" name="emailAddress" size={ breakpoints.sm ? '20' : '30' } /></label>
                            <button className={styles.sendButton} type="submit">
                                <IconContext.Provider value={{ color: "#FFFFFF" }}>
                                    <FaPaperPlane></FaPaperPlane>
                                </IconContext.Provider>
                            </button>
                        </div>
                        
                        <div className={styles.disclaimerText}>
                            <span>*</span>
                            <span>The email address you provide will never be shared with anyone. This is simply to stay in touch over my journey. Thanks for your support!</span>
                        </div>
                    </div>

                </form>
            </div>

            <p>In Love and Solidarity,</p>
            <p>Jorge Viramontes</p>
        </div>
    )
}

export default EmailSignup
