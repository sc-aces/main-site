import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'
// import { Link } from 'gatsby'
import Topbar from './Topbar'
import Nav from './Nav'

const styles = theme => ({
  root: {
    background: theme.palette.secondary.color,
    fontFamily: theme.fonts.display,
  },
  gutters: {
    marginBottom: '1.5rem',
  },
})

const Header = ({ classes, disableGutters }) => (
  <div className={classNames(classes.root, !disableGutters && classes.gutters)}>
    <Topbar />
    <Nav />
    {/* <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </div>
)

export default injectSheet(styles)(Header)
