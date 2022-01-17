import React, { Fragment } from "react";
import { graphql } from "gatsby";
import SEO from "../../seo";
import logo1 from "../../../images/logo.svg";
import linkd from "../../../data/assets/linkedin.svg";
import twitters from "../../../data/assets/twitter.svg";
import
{
  BlogContainer, AuthorInfo,
  BlogContent,
} from "./styles";

export const BlogPost = ( {
  fields,
  author,
  date,
  title,
  linkdin,
  twitter,
  html,
  preview
} ) =>
{

  return (
      <BlogContainer>
        <h2 className="blogTitle">{ title }</h2>
        <AuthorInfo>
          <img src={ logo1 } alt={ author } className="author_image" />
          <div className="author_info">
            <h4>Klinik Everywhere</h4>
            <div>
              <span id="date">{ date }</span>
              {
                fields && <span>{ fields.readingTime.text } </span>
              }
            </div>
            <div id="socio_lnks">
              {
                linkdin &&
                <a id="link" href={ linkdin } target="_blank" without rel="noopener noreferrer"><img src={ linkd } alt="img" className="icon" /></a>
              }
              {
                twitter &&
                <a id="link" href={ twitter } target="_blank" without rel="noopener noreferrer"><img src={ twitters } alt="img" className="icon" /></a>
              }
            </div>
          </div>
        </AuthorInfo>
        <BlogContent>
          {
            preview ? <div>{ html }</div> : <div dangerouslySetInnerHTML={ { __html: html } } id="div_block" />
          }
        </BlogContent>
      </BlogContainer>
  );
};

const Blog = ( { data } ) =>
{

  const { blogpost: post } = data;

  const seoData = post.frontmatter.seo;

  const authorImage = post.frontmatter.author_image.publicURL;
  const preview_Image = post.frontmatter.previewImage.publicURL;

  return (
    <Fragment>
      <SEO title={ seoData.title } description={ seoData.description } keywords={ seoData.keywords } />
      <BlogPost
        fields={ post.fields }
        author_image={ authorImage }
        previewImage={ preview_Image }
        author={ post.frontmatter.author }
        bio={ post.frontmatter.bio }
        Link_preview={ post.frontmatter.Link_preview }
        Link_next={ post.frontmatter.Link_next }
        date={ post.frontmatter.date }
        title={ post.frontmatter.title }
        linkdin={ post.frontmatter.linkdin }
        twitter={ post.frontmatter.twitter }
        html={ post.html }
        tags={ post.frontmatter.tags }
        preview={ false }
      />
    </Fragment>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    blogpost: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        author
        author_image {
          publicURL
        }
        previewImage {
          publicURL
        }
        bio
        linkdin
        twitter
        date(formatString: "MMMM DD, YYYY")
        title
        seo {
          title
          description
          keywords
        }
      }
      html
    }
    seoData: file(relativePath: {eq: "seoBlog.md"}) {
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
