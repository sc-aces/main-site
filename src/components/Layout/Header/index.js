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
  '@global': {
    blockquote: {
      color: theme.palette.midnight.color,
      background: theme.palette.midnight.contrast,
      borderLeft: `5px solid ${theme.palette.secondary.color}`,
      padding: '4px 16px',
    },
    hr: {
      height: 2,
      margin: 0,
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.secondary.color,
    },
    '.col3': {
      width: `${(3 / 12) * 100}%`,
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
    '.col4': {
      width: `${(4 / 12) * 100}%`,
      padding: '0 16px',
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
    '.col6': {
      width: `${(6 / 12) * 100}%`,
      padding: '0 16px',
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
    '.col9': {
      width: `${(9 / 12) * 100}%`,
      padding: '0 16px',
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
    '.row': {
      display: 'flex',
      width: '100%',
      '@media (max-width: 767px)': {
        display: 'block',
      },
    },
  },
})

const Header = ({ classes, disableGutters }) => (
  <div className={classNames(classes.root, !disableGutters && classes.gutters)}>
    <Topbar />
    <Nav />
  </div>
)

export default injectSheet(styles)(Header)
