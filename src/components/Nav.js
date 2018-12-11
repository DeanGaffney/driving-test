import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};

function Nav(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit" className={classes.grow}>
						Driving Test Questions
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

Nav.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
