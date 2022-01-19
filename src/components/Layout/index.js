import React from "react"
import PropTypes from "prop-types"
import Nav from "../Home/Nav"
import Footer from "../Home/Footer";
import { GlobalStyle } from '../../styles/global-styles';

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <main>{props.children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
