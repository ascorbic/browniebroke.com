import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Header from './header'

function getHeroImage(fluidImage) {
  if (fluidImage) {
    return (
      <div
        style={{
          padding: 0,
        }}
      >
        <Img fluid={fluidImage.childImageSharp.fluid} />
      </div>
    )
  }
}

const Layout = ({ children, headerImage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {getHeroImage(headerImage)}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 700,
          padding: `0px 1rem 1.50rem`,
          paddingTop: `3rem`,
          minHeight: `100vh`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.defaultProps = {
  headerImage: null,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerImage: PropTypes.object,
}

export default Layout
