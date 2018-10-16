import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Table from '../Table/Table'

const styles = theme => ({
   root: {
      flexGrow: 1,
   }
});

const App = props => {
   const { classes, informativa, program } = props;
   console.log(props)

   const prepareData = (data) => {
      const day = new Date().getDay();
      const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

      const obj = data.filter(d => d.day === week[day])[0]
      return obj.program
   }

   return (
      <Grid container className={classes.root} spacing={16}>
         <Grid item xs={4}>  
            <Table title="Informativa" data={prepareData(informativa)} />
         </Grid>
         <Grid item xs={4}>
            <Grid container spacing={16}>
               <Grid item xs={12}>
               </Grid>
               <Grid item xs={12}>
                  <Table title="Program" data={prepareData(program)} />
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
}

App.propTypes = {
   classes: PropTypes.object.isRequired,
};

function mapStateToProps({ informativa, program }) {
   return { informativa, program }
}

export default connect(mapStateToProps)(withStyles(styles)(App));