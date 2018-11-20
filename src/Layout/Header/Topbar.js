import React from 'react'
import { Link } from 'gatsby'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRedditSquare,
  faSteamSquare,
} from '@fortawesome/free-brands-svg-icons'
import { faSearch, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

const styles = theme => ({
  root: {
    background: theme.palette.midnight.color,
    color: theme.palette.midnight.contrast,
    display: 'flex',
    fontFamily: theme.fonts.body,
    justifyContent: 'center',
    padding: '5px 0',
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
  socialIcons: {
    fontSize: '1.5rem',
    '& a': {
      marginRight: 7,
    },
  },
  loginIcons: {
    fontSize: '1rem',
    '& a': {
      marginLeft: 7,
    },
  },
  link: {
    '& a': {
      color: theme.palette.midnight.contrast,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.secondary.color,
        textDecoration: 'underline',
      },
    },
  },
})

const Topbar = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.inner}>
      <div
        className={classNames(
          classes.socialIcons,
          classes.link,
          'disableDecoration'
        )}
      >
        <Link to="#">
          <FontAwesomeIcon icon={faRedditSquare} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faSteamSquare} />
        </Link>
      </div>
      <div
        className={classNames(
          classes.loginIcons,
          classes.link,
          'disableDecoration'
        )}
      >
        <Link to="#">
          <FontAwesomeIcon icon={faUserAstronaut} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(Topbar)
