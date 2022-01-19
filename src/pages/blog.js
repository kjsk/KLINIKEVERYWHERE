import React from "react";
import { Link } from "gatsby";
import { BlogsContainer } from "../components/Home/Blog/styles";

export const BlogPage = ( { blogLists } ) =>
{

    const blogList = blogLists


    return (
        <BlogsContainer>
            <div className="blog" id="blog">
                <h1 id="blog_h1">Blogs & Articles</h1>
                <div className="blog_container">
                    { blogList && blogList.map( ( blogItem, i ) =>
                        <Link className="blog_card" key={ i } to={ blogItem.node.fields.slug }>
                            <div className="blog_card_img">
                                <img src={ blogItem.node.frontmatter.previewImage.publicURL } alt="img1" />
                            </div>
                            <div className="blog_card_matter">
                                <p id="blog_card_title">{ blogItem.node.frontmatter.title }</p>
                                <p id="blog_card_description">{ blogItem.node.frontmatter.excerpt }</p>
                                <p id="blog_card_date">{ blogItem.node.frontmatter.date }</p>
                            </div>
                        </Link>
                    ) }
                </div>
            </div>
        </BlogsContainer>
    );
};

export default BlogPage;

