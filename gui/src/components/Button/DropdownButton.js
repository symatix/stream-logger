import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class DropdownButton extends React.Component {
   state = {
      anchorEl: null,
   };

   handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
   };

   handleClose = (val) => {
      this.setState({ anchorEl: null });
      this.props.action(val)
   };

   render() {
      const { anchorEl } = this.state;
      const { options, label } = this.props;

      return (
         <div>
            <Button
               aria-owns={anchorEl ? 'simple-menu' : null}
               aria-haspopup="true"
               onClick={this.handleClick}>
               {label || "Select"}
            </Button>
            <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={this.handleClose}>
               {options.map(o => <MenuItem key={o} onClick={() => this.handleClose(o)}>{o}</MenuItem>)}
            </Menu>
         </div>
      );
   }
}

export default DropdownButton;