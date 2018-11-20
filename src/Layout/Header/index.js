import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';
// import { Link } from 'gatsby'
import Topbar from './Topbar';
import Nav from './Nav';

const styles = theme => ({
  root: {
    background: theme.palette.secondary.color,
    fontFamily: theme.fonts.display,
  },
  gutters: {
    marginBottom: '1.5rem',
  },
});

const Header = ({ classes, disableGutters }) => (
  <div className={classNames(classes.root, !disableGutters && classes.gutters)}>
    <Topbar />
    <Nav />
  </div>
);

export default injectSheet(styles)(Header);
