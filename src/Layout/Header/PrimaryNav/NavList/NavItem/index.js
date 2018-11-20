import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles, withTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from '@material-ui/core';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NavList extends React.Component {
  state = {
    open: false,
  };

  handleClick = key => () => {
    this.setState(state => ({ [key]: !state[key] }));
  };

  render() {
    const { classes, handleCloseNav, item, nested = 0, theme } = this.props;
    console.log(this.props.theme);
    const typographyVariant = nested > 2 ? 'subtitle1' : `h${nested + 4}`;
    let listItemProps = { onClick: handleCloseNav };

    if (item.href != null) {
      listItemProps = item.href.match(/^\/.+/g)
        ? { ...listItemProps, component: Link, to: item.href }
        : { ...listItemProps, component: 'a', href: item.href };
    }

    if (item.nav != null) {
      listItemProps = { onClick: this.handleClick('open') };
    }

    const nestedPadding = theme.spacing.unit * (nested * 3 + 3);
    return (
      <>
        <ListItem
          style={{ paddingLeft: nestedPadding > 96 ? 96 : nestedPadding }}
          dense={nested > 0}
          button
          {...listItemProps}
        >
          {item.icon && (
            <ListItemIcon>
              <Typography variant={typographyVariant}>
                <FontAwesomeIcon icon={item.icon} />
              </Typography>
            </ListItemIcon>
          )}
          <ListItemText
            inset
            primary={<Typography variant={typographyVariant}>{item.title}</Typography>}
          />
          {item.nav != null &&
            (this.state.open ? (
              <Typography variant={typographyVariant}>
                <FontAwesomeIcon icon={faChevronUp} />
              </Typography>
            ) : (
              <Typography variant={typographyVariant}>
                <FontAwesomeIcon icon={faChevronDown} />
              </Typography>
            ))}
        </ListItem>
        {item.nav && (
          <Collapse in={this.state.open} timeout="auto">
            <Divider inset />
            {item.nav.map((item, j) => (
              <React.Fragment key={j}>
                <NavList
                  item={item}
                  handleCloseNav={handleCloseNav}
                  classes={classes}
                  theme={theme}
                  nested={nested + 1}
                />
              </React.Fragment>
            ))}
          </Collapse>
        )}
      </>
    );
  }
}

NavList.propTypes = {
  classes: PropTypes.object.isRequired,
  handleCloseNav: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  nested: PropTypes.number,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(NavList));
