import React, { Fragment } from "react";
import FindDoctors from "../components/FindDoctors";

import SEO from "../components/seo"

const DoctorsIndex = () =>
{

    return (
        <Fragment>
            <SEO title="FindDoctors" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={ [ 'gatsby', 'react' ] } />
            <FindDoctors />
        </Fragment>
    )
}

export default DoctorsIndex;
