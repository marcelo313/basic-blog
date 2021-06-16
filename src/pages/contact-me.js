import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";

const ContactPage = () => (
    <Layout>
        <Seo title="Contact Me" />
        <h1>Contact Me</h1>
        <p>
            Looking to build a website for your business? I'd love to hear from you!
        </p>
        <p>
            Please fill out this short form and I will respond as soon as I can (usually within 2 business days).
        </p>

        <form name="contact-me" method="POST" data-netlify="true" action="/contact-success">
            <p>
                <label>First Name: <input type="text" name="firstName" /></label>
            </p>
            <p>
                <label>Last Name: <input type="text" name="lastName" /></label>
            </p>
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
    </Layout>
)
export default ContactPage