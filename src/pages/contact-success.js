import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import {Link} from "gatsby";

const SuccessPage = () => (
    <Layout>
        <Seo title="Success" />
        <h1>Success!</h1>
        <p>
            Thanks! Your message was successfully sent. Please allow 1-2 days for a reply. 
        </p>
        <p>
            Back <Link to="/index">Home.</Link>    
        </p>
    </Layout>
)
export default SuccessPage