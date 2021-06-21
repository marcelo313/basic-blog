import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const EmailSignup = () => {
    return (
        <div>
            <h3>Join me on this journey to find out how I can unlock Endless Possibilities in my life and I hope it opens up some doors for you.</h3>
            <div>
                <form name="emailSignup" method="post" data-netlify="true" action="/email-signup-success" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="emailSignup" />
                    <label>Email: <input type="email" name="emailAddress" /></label>
                    <button type="submit"><FaPaperPlane></FaPaperPlane></button>
                    <p>* The email address you provide will never be shared with anyone. This is simply to stay in touch over my journey.</p>
                </form>
            </div>

            <p>In Love and Solidarity,</p>
            <p>Jorge Viramontes</p>
        </div>
    )
}

export default EmailSignup
