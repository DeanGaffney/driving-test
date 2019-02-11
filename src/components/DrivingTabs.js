import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import DataList from "./DataList";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class DrivingTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Typography variant="h4" color="inherit" className={classes.grow}>
            Driving Test Oral
          </Typography>
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="Questions" />
            <Tab label="Road Signs" />
            <Tab label="Car Check" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <DataList />
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

DrivingTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrivingTabs);
