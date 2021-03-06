import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { Z_BLOCK } from 'zlib'

const buttonVariants = ['primary', 'secondary', null]

const styles = theme => ({
  button: {
    background: 'none',
    borderRadius: 0,
    border: 0,
    overflow: 'visible',
    transition: 'outline-width .3s, outline-offset .3s, background-color .3s',
    '-webkit-appearance': 'none',
    cursor: 'pointer',
    outline: '4px solid hsla(0,0%,100%,0)',
    outlineOffset: 6,
    padding: '13px 30px 12px',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      backgroundPosition: 0,
    },
    textTransform: 'uppercase',
  },
  primary: {
    backgroundPosition: '99%',
    backgroundSize: '205% 100%',
    color: theme.palette.primary.contrast,
    background: `linear-gradient(
      90deg,
      ${theme.palette.secondary.color} 0,
      ${theme.palette.secondary.color} 50%,
      ${theme.palette.primary.color} 51%,
      ${theme.palette.primary.color}
      )`,
    '&:hover': {
      color: theme.palette.secondary.contrast,
    },
  },
  default: {
    backgroundPosition: '99%',
    backgroundSize: '205% 100%',
    color: theme.palette.gray.contrast,
    background: `linear-gradient(
      90deg,
      ${theme.palette.secondary.color} 0,
      ${theme.palette.secondary.color} 50%,
      ${theme.palette.gray.color} 51%,
      ${theme.palette.gray.color}
      )`,
    '&:hover': {
      color: theme.palette.secondary.contrast,
    },
  },
  linkOverride: {
    border: 'none',
    padding: 0,
  },
})

const Button = props => {
  const { children, classes } = props
  const variant = props.variant ? props.variant : 'default'
  return (
    <button
      className={classNames(classes[variant], classes.button)}
      type="button"
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(buttonVariants),
}

const ButtonContainer = props => {
  const { children, classes, href, linkProps, variant } = props

  const button = <Button {...props}>{children}</Button>

  if (href.match(/^\/.+$/) != null) {
    return (
      <Link className={classes.linkOverride} to={href} {...linkProps}>
        {button}
      </Link>
    )
  } else if (href != null) {
    return (
      <a className={classes.linkOverride} href={href} {...linkProps}>
        {button}
      </a>
    )
  }

  return button
}

ButtonContainer.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(buttonVariants),
}

export default injectSheet(styles)(ButtonContainer)
