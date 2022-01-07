import React, { Fragment } from "react";
import FindDoctors from "../components/FindDoctors";
import Footer from "../components/Home/Footer";
import Contact from "../components/Home/Contact";

import SEO from "../components/seo"

const DoctorsIndex = () =>
{

    return (
        <Fragment>
            <SEO title="Home" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={ [ 'gatsby', 'react' ] } />
            <FindDoctors />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default DoctorsIndex;
