import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { Link } from 'gatsby'

const buttonVariants = ['primary', 'secondary', 'dark', 'default', null]

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
    margin: '8px 16px',
  },
  primary: {
    backgroundPosition: '100%',
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
  secondary: {
    backgroundPosition: '100%',
    backgroundSize: '205% 100%',
    color: theme.palette.secondary.contrast,
    background: `linear-gradient(
      90deg,
      ${theme.palette.primary.color} 0,
      ${theme.palette.primary.color} 50%,
      ${theme.palette.secondary.color} 51%,
      ${theme.palette.secondary.color}
      )`,
    '&:hover': {
      color: theme.palette.primary.contrast,
    },
  },
  dark: {
    backgroundPosition: '100%',
    backgroundSize: '205% 100%',
    color: theme.palette.midnight.contrast,
    background: `linear-gradient(
      90deg,
      ${theme.palette.primary.color} 0,
      ${theme.palette.primary.color} 50%,
      ${theme.palette.midnight.color} 51%,
      ${theme.palette.midnight.color}
      )`,
    '&:hover': {
      color: theme.palette.primary.contrast,
    },
  },
  default: {
    backgroundPosition: '100%',
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
  const { children, classes, className } = props
  const variant = props.variant ? props.variant : 'default'
  return (
    <button
      className={classNames(classes[variant], classes.button, className)}
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
  const { children, classes, href, linkProps } = props

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
