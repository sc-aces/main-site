import React from 'react';
import { Link } from 'gatsby';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './styles';

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.inner}>
      <div className={classNames(classes.copyright, classes.link)}>
        <p>
          This is a <Link to="https://robertsspaceindustries.com/">Star Citizen</Link> fan site.
          Content not original to this site is © 2015 Cloud Imperium Games Corporation and Roberts
          Space Industries Corp. Star Citizen™, Squadron 42™, Roberts Space Industries™, and Cloud
          Imperium Games™ are trademarks of Cloud Imperium Games Corporation. All rights reserved.
        </p>
      </div>
      <div className={classNames(classes.loginIcons, classes.link)} />
    </div>
  </div>
);

export default injectSheet(styles)(Footer);
