import React, { Fragment } from "react";
import DoctorsProfile from "../components/DoctorsProfile";
import SEO from "../components/seo"

const ProfileIndex = () =>
{

    return (
        <Fragment>
            <SEO title="FindDoctors" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={ [ 'gatsby', 'react' ] } />
            <DoctorsProfile />
        </Fragment>
    )
}

export default ProfileIndex;
