import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
// background by SVGBackgrounds.com
import bgTriangles from '../../assets/img/triangles.svg'

const styles = theme => ({
  root: {
    maxWidth: 1250,
    fontFamily: theme.fonts.body,
    padding: '0 1.5em',
    margin: '0 auto',
    '& h1, & h2, & h3, & h4': {
      fontFamily: theme.fonts.display,
    },
    '& h1': {
      fontSize: '2.5em',
    },
    '& h2': {
      fontSize: '1.8em',
      fontWeight: 500,
    },
    '& h3': {
      fontSize: '1.35em',
      fontVariant: 'small-caps',
    },
    '& h4': {
      fontSize: '1.20em',
    },
    '& h5': {
      fontWeight: 'bold',
      fontSize: '1em',
    },
  },
  center: {
    '& h1, & h2, & h3, & h4': {
      textAlign: 'center',
    },
  },
  vertPadding: {
    paddingTop: '2.5em',
    paddingBottom: '5em',
  },
  inset: {
    background: '#f7f8fa',
    boxShadow: 'inset 0px 0px 13px 2px rgba(200, 200, 200, .5)',
  },
  dark: {
    background: theme.palette.secondary.contrast,
    color: theme.palette.primary.contrast,
  },
  trianglesBg: {
    backgroundColor: '#ededed',
    backgroundImage: `url(${bgTriangles})`,
  },
})

const Section = ({
  children,
  classes,
  center,
  disableVertPadding,
  className,
  innerClassName,
  id,
  inset,
  bg,
  dark,
}) => (
  <div
    className={classNames(
      inset && classes.inset,
      bg && classes[`${bg}Bg`],
      dark && classes.dark,
      className
    )}
  >
    <div
      id={id}
      className={classNames(
        classes.root,
        center && classes.center,
        !disableVertPadding && classes.vertPadding,
        innerClassName
      )}
    >
      {children}
    </div>
  </div>
)

export default injectSheet(styles)(Section)
