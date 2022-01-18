import React, { Fragment } from "react";
import Media from "../components/Media";
import SEO from "../components/seo"

const MediaIndex = () =>
{

    return (
        <Fragment>
            <SEO title="FindDoctors" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={ [ 'gatsby', 'react' ] } />
            <Media />
        </Fragment>
    )
}

export default MediaIndex;