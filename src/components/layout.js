
import React from "react"
import PropTypes from "prop-types"
import NavHeader from './NavHeader'

const Layout = ({ children }) => {
  return (
    <div className="main" style={{ width: "100%"}}>
      <NavHeader color="black" />
      <div
        style={{
          margin:"0 auto",
          width: "100%",
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
