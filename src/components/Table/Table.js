import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 50,
  },
});

const SimpleTable = (props) => {
  const { classes, data, title } = props;

  return (
    <Paper className={classes.root}>
    
        <Typography variant="title" align="center" gutterBottom>
            {title}
        </Typography>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell numeric>Hour</TableCell>
            <TableCell>Program</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d, i) => {
            return (
              <TableRow key={d.content+i+d.hour}>
                <TableCell numeric>{d.hour}</TableCell>
                <TableCell component="th" scope="row">
                  {d.content}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

export default withStyles(styles)(SimpleTable);