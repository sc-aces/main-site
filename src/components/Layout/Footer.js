import React from 'react'
import { Link } from 'gatsby'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    background: theme.palette.primary.color,
    color: theme.palette.gray.color,
    display: 'flex',
    fontFamily: theme.fonts.body,
    justifyContent: 'center',
    padding: '15px 0',
    marginTop: '1.5rem',
  },
  inner: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1250,
    width: '100%',
    '@media screen and (max-width: 1250px)': {
      margin: '0 10px',
    },
  },
  copyright: {
    '& p': {
      fontSize: '0.75rem',
      textAlign: 'center',
      margin: 0,
    },
  },
  link: {
    '& a': {
      color: theme.palette.secondary.color,
      textDecoration: 'none',
      '&:hover': {
        // color: theme.palette.secondary.color,
      },
    },
  },
})

console.log(typeof styles)

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.inner}>
      <div className={classNames(classes.copyright, classes.link)}>
        <p>
          This is a{' '}
          <Link to="https://robertsspaceindustries.com/">Star Citizen</Link> fan
          site. Content not original to this site is © 2015 Cloud Imperium Games
          Corporation and Roberts Space Industries Corp. Star Citizen™, Squadron
          42™, Roberts Space Industries™, and Cloud Imperium Games™ are
          trademarks of Cloud Imperium Games Corporation. All rights reserved.
        </p>
      </div>
      <div className={classNames(classes.loginIcons, classes.link)} />
    </div>
  </div>
)

export default injectSheet(styles)(Footer)
