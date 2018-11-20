import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import NavList from './NavList';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    width: 48,
  },
  menuContainer: {
    minWidth: 300,
  },
  drawer: {
    '& > div': {
      height: '100%',
    },
  },
});

class PrimaryNav extends React.Component {
  state = {
    isMenuOpen: true,
  };

  toggleNav = () => {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen,
    }));
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleNav}
            >
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
            <Typography variant="h6" color="inherit">
              ACES
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          anchor="top"
          open={this.state.isMenuOpen}
          onClose={this.toggleNav}
        >
          <div className={classes.menuContainer}>
            <AppBar position="static" color="secondary">
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" onClick={this.toggleNav}>
                  <FontAwesomeIcon icon={faTimes} />
                </IconButton>
                <Typography variant="h6">NAV</Typography>
              </Toolbar>
            </AppBar>
            <NavList handleCloseNav={this.toggleNav} />
          </div>
        </Drawer>
      </>
    );
  }
}

PrimaryNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimaryNav);
