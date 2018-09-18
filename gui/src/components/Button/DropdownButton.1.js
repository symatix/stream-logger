import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
   container: {
      display: 'flex',
      flexWrap: 'wrap',
   },
   textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
   },
   dense: {
      marginTop: 16,
   },
   menu: {
      width: 200,
   },
});


class DropdownButton extends React.Component {
   state = {
      value: '',
   };

   handleChange = () => event => {
      const { value } = event.target
      this.setState({ value });
      this.props.action(value)
   };

   render() {
      const { classes, options } = this.props;
      return (
         <form className={classes.container} noValidate autoComplete="off">
            <TextField
               id="filled-select-native"
               select
               className={classes.textField}
               value={this.state.value}
               onChange={this.handleChange()}
               SelectProps={{
                  native: true,
                  MenuProps: {
                     className: classes.menu,
                  },
               }}
               label=""
               helperText="Select Station"
               margin="normal"
               variant="filled"
            >
               {options.map(option => (
                  <option key={option} value={option}>
                     {option}
                  </option>
               ))}
            </TextField>
         </form>
      );
   }
}

DropdownButton.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DropdownButton);