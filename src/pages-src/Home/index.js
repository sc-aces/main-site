import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faMicroscope, faFighterJet } from '@fortawesome/free-solid-svg-icons';
import img from '../../assets/img/home_hero.jpg';
import acesLogo from '../../assets/img/acesLogoB-300x188.png';
import Button from '../../components/Button';
import styles from './styles';

import ReactPlayer from 'react-player';

// console.warn(typeof styles, styles);

const Home = ({ classes }) => <div className={classes.root} />;

export default withStyles(styles)(Home);
