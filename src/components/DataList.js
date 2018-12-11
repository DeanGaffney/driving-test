import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import drivingData from '../data/data.json';

const styles = (theme) => ({
	root: {
		width: '100%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	}
});

function DataList(props) {
	const { classes } = props;

	const panelList = drivingData.map((entry, index) => {
		return (
			<ExpansionPanel key={index}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>
						<b>
							<em>Q{index + 1}.</em>
						</b>{' '}
						{entry.question}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						<b>{entry.answer}</b>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	});

	return <div className={classes.root}>{panelList}</div>;
}

DataList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataList);
