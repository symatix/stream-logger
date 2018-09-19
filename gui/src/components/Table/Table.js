import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const actionsStyles = theme => ({
   root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5,
   },
});

class TablePaginationActions extends React.Component {
   handleFirstPageButtonClick = event => {
      this.props.onChangePage(event, 0);
   };

   handleBackButtonClick = event => {
      this.props.onChangePage(event, this.props.page - 1);
   };

   handleNextButtonClick = event => {
      this.props.onChangePage(event, this.props.page + 1);
   };

   handleLastPageButtonClick = event => {
      this.props.onChangePage(
         event,
         Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
      );
   };

   render() {
      const { classes, count, page, rowsPerPage, theme } = this.props;

      return (
         <div className={classes.root}>
            <IconButton
               onClick={this.handleFirstPageButtonClick}
               disabled={page === 0}
               aria-label="First Page"
            >
               {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
               onClick={this.handleBackButtonClick}
               disabled={page === 0}
               aria-label="Previous Page"
            >
               {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
               onClick={this.handleNextButtonClick}
               disabled={page >= Math.ceil(count / rowsPerPage) - 1}
               aria-label="Next Page"
            >
               {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
               onClick={this.handleLastPageButtonClick}
               disabled={page >= Math.ceil(count / rowsPerPage) - 1}
               aria-label="Last Page"
            >
               {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
         </div>
      );
   }
}

TablePaginationActions.propTypes = {
   classes: PropTypes.object.isRequired,
   count: PropTypes.number.isRequired,
   onChangePage: PropTypes.func.isRequired,
   page: PropTypes.number.isRequired,
   rowsPerPage: PropTypes.number.isRequired,
   theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
   TablePaginationActions,
);

const styles = theme => ({
   root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
   },
   table: {
      minWidth: 500,
   },
   tableWrapper: {
      overflowX: 'auto',
   }, 
   tableCell: {
     whiteSpace: 'nowrap',
   }
});

class CustomPaginationActionsTable extends React.Component {

   state = {
      sortBy: "time",
      sortDirection: false,
      page: 0,
      rowsPerPage: 10,
      rows: this.props.data
   };

   handleChangePage = (event, page) => {
      this.setState({ page });
   };

   handleChangeRowsPerPage = event => {
      this.setState({ rowsPerPage: event.target.value });
   };

   handleSorting(field, direction){
      this.setState({ sortBy: field, sortDirection: direction})
   }

   sortBy(field, reverse, primer) {

      var key = primer ?
         function (x) { return primer(x[field]) } :
         function (x) { return x[field] };

      reverse = !reverse ? 1 : -1;

      return function (a, b) {
         return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      }
   }

   render() {
      const { classes, station, data } = this.props;
      const { rowsPerPage, page, sortBy, sortDirection } = this.state;
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
      return (
         <Paper className={classes.root}>
           <Typography variant="headline" gutterBottom>
               {station}
            </Typography>
            <div className={classes.tableWrapper}>
               <Table className={classes.table}>
                  <TableHead fixedHeader={true}>
                     <TableRow>
                        <TableCell className={classes.tableCell}>
                            <IconButton 
                                onClick={() => this.handleSorting("current_song", false,function(a){return a.toUpperCase()})} 
                                color="default">
                                <ArrowDownward fontSize="small" />
                            </IconButton>
                                Song
                            <IconButton
                                onClick={() => this.handleSorting("current_song", true,function(a){return a.toUpperCase()})}
                                color="default">
                                <ArrowUpward fontSize="small" />
                            </IconButton>
                        </TableCell>
                        <TableCell numeric className={classes.tableCell}>
                            <IconButton 
                                onClick={() => this.handleSorting("current_listeners", false, parseInt)} 
                                color="default">
                                <ArrowDownward fontSize="small" />
                            </IconButton>
                                Listeners
                            <IconButton
                                onClick={() => this.handleSorting("current_listeners", true, parseInt)}
                                color="default">
                                <ArrowUpward fontSize="small" />
                            </IconButton>
                        </TableCell>
                        <TableCell numeric className={classes.tableCell}>
                            <IconButton 
                                onClick={() => this.handleSorting("unique_listeners", false, parseInt)} 
                                color="default">
                                <ArrowDownward fontSize="small" />
                            </IconButton>
                            Unique Listeners
                            <IconButton
                                onClick={() => this.handleSorting("unique_listeners", true, parseInt)}
                                color="default">
                                <ArrowUpward fontSize="small" />
                            </IconButton>
                        </TableCell>
                        <TableCell numeric className={classes.tableCell}>
                            <IconButton 
                                onClick={() => this.handleSorting("peak_listeners", false, parseInt)} 
                                color="default">
                                <ArrowDownward fontSize="small" />
                            </IconButton>
                            Peak Listeners
                            <IconButton
                                onClick={() => this.handleSorting("peak_listeners", true, parseInt)}
                                color="default">
                                <ArrowUpward fontSize="small" />
                            </IconButton>
                        </TableCell>
                        <TableCell numeric className={classes.tableCell}>
                            <IconButton 
                                onClick={() => this.handleSorting("time", false,function(a){return a.toUpperCase()})} 
                                color="default">
                                <ArrowDownward fontSize="small" />
                            </IconButton>
                                Time
                            <IconButton
                                onClick={() => this.handleSorting("time", true,function(a){return a.toUpperCase()})}
                                color="default">
                                <ArrowUpward fontSize="small" />
                            </IconButton>
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>

                     {data.sort(this.sortBy(sortBy, sortDirection,)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(d => {
                        return (
                           <TableRow key={d._id} hover>
                              <TableCell  className={classes.tableCell} component="th" scope="row">{d.current_song}</TableCell>
                              <TableCell  className={classes.tableCell} numeric>{d.current_listeners}</TableCell>
                              <TableCell  className={classes.tableCell} numeric>{d.unique_listeners}</TableCell>
                              <TableCell  className={classes.tableCell} numeric>{d.peak_listeners}</TableCell>
                              <TableCell  className={classes.tableCell} numeric>{d.time}</TableCell>
                           </TableRow>
                        );
                     })}

                     {emptyRows > 0 && (
                        <TableRow style={{ height: 48 * emptyRows }}>
                           <TableCell colSpan={6} />
                        </TableRow>
                     )}

                  </TableBody>
                  <TableFooter>
                     <TableRow>
                        <TablePagination
                           colSpan={3}
                           rowsPerPageOptions={[10, 20, 30]}
                           count={data.length}
                           rowsPerPage={rowsPerPage}
                           page={page}
                           onChangePage={this.handleChangePage}
                           onChangeRowsPerPage={this.handleChangeRowsPerPage}
                           ActionsComponent={TablePaginationActionsWrapped}
                        />
                     </TableRow>
                  </TableFooter>
               </Table>
            </div>
         </Paper>
      );
   }
}

CustomPaginationActionsTable.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomPaginationActionsTable);