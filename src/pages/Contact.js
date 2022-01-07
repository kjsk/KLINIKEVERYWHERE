import React from "react";
import Contact from "../components/Home/Contact"

import SEO from "../components/seo"

const ContactIndex = () =>
{

    return (
        <>
            <SEO title="Home" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={ [ 'gatsby', 'react' ] } />
            <Contact />
        </>
    )
}

export default ContactIndex
