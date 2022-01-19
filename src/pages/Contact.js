import React from "react";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";

import SEO from "../components/seo";

const ContactIndex = () =>
{

    return (
        <>
            <SEO title="Contact" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={ [ 'gatsby', 'react' ] } />
            <Contact />
            <Footer/>
        </>
    )
}

export default ContactIndex;
