import React, { Fragment } from "react";
import Banner from "../components/Home/Banner"
import Status from "../components/Home/Status"
import Patner from "../components/Home/Patner"
import Cards from "../components/Home/Cards"
import Coming from "../components/Home/Coming"
import Doctor from "../components/Home/Doctor"
import About from "../components/Home/About"
import Team from "../components/Home/Team"
import Customers from "../components/Home/Customers"
import Clints from "../components/Home/Clints"
import BlogPage from "./blog"
import Footer from "../components/Home/Footer"
import Contact from "../components/Home/Contact"
import { graphql } from "gatsby";

import SEO from "../components/seo"

const HomeIndex = ( { data } ) =>
{
  const blogLists = data.blogData.edges

  return (
    <Fragment>
      <SEO title="Home" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={ [ 'gatsby', 'react' ] } />
      <Banner />
      <Status />
      <Patner />
      <Cards />
      <Coming />
      <Doctor />
      <About />
      <Team />
      <Customers />
      <Clints />
      <BlogPage blogLists={ blogLists } />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default HomeIndex;

export const pageQuery = graphql`
  query {
    blogData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/data/(blog)/.*\\\\.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
            author
            previewImage {
              publicURL
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    seoData: file(relativePath: { eq: "seoBlog.md" }) {
      childMarkdownRemark {
        frontmatter {
          title
          description
          keywords
        }
      }
    }
  }
`

