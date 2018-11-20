import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  gutters: {
    margin: '1.5rem auto',
    maxWidth: 1250,
  },
});

const PageContainer = ({ children, classes, disableGutters }) => (
  <div className={classNames(!disableGutters && classes.gutters)}>{children}</div>
);

PageContainer.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
  disableGutters: PropTypes.bool,
};

export default withStyles(styles)(PageContainer);
