import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import nav from '../../../../assets/nav';
import NavItem from './NavItem';

const styles = theme => ({
  list: {
    maxWidth: 800,
    margin: '0 auto',
  },
});

const NavList = props => {
  const { classes, handleCloseNav } = props;
  return (
    <List className={classes.list} component="nav">
      {nav.map((item, i) => (
        <React.Fragment key={i}>
          <NavItem item={item} handleCloseNav={handleCloseNav} />
        </React.Fragment>
      ))}
    </List>
  );
};

NavList.propTypes = {
  classes: PropTypes.object.isRequired,
  handleCloseNav: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavList);
