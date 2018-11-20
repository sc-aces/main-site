import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const styles = theme => ({
  root: {
    background: theme.palette.primary.color,
    display: 'flex',
    fontFamily: theme.fonts.body,
    justifyContent: 'center',
  },
  inner: {
    maxWidth: 1250,
    width: '100%',
    fontSize: '1rem',
  },
  link: {
    '& a': {
      color: theme.palette.midnight.contrast,
      marginRight: 7,
      textDecoration: 'none',
      borderBottom: '5px solid transparent',
      '&:hover': {
        borderColor: 'green',
        paddingBottom: '14px',
        '& span': {
          background: theme.palette.midnight.color,
          color: theme.palette.midnight.contrast,
        },
      },
      '& span': {
        display: 'inline-block',
        padding: '17px 18px',
        textTransform: 'uppercase',
      },
    },
  },
})

const Nav = ({ classes }) => (
  <div className={classes.root}>
    <div className={classNames(classes.inner, classes.link)}>
      <Link to="#">
        <span>
          <FontAwesomeIcon icon={faHome} />
        </span>
      </Link>
      <Link to="#">
        <span>Community</span>
      </Link>
      <Link to="#">
        <span>Comms</span>
      </Link>
      <Link to="#">
        <span>Gov</span>
      </Link>
      <Link to="#">
        <span>About</span>
      </Link>
    </div>
  </div>
)

export default injectSheet(styles)(Nav)
