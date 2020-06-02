import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostgresqlIcon from './Images/PostgresqlIcon.png'
import ReactIcon from './Images/ReactIcon.png'
import RailsIcon from './Images/RailsIcon.png'
import ReduxIcon from './Images/ReduxIcon.png'
import RubyIcon from './Images/RubyIcon.png'
import MaterialUiIcon from './Images/MaterialUiIcon.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 150,
    width: 200,
  },
  control: {
    padding: 2,
  },
  media: {
    height: 200,
  }
}));

export default function IconsGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
            
            <Grid key={2} item>   
                <img src={ReactIcon} alt="React" style={{maxHeight: 150, maxWidth: 150,}} />   
            </Grid>

            <Grid key={2} item>
                    <img src={ReduxIcon} alt="Redux" style={{maxHeight: 150, maxWidth: 150}} />
            </Grid>


            <Grid key={2} item>
                    <img src={RailsIcon} alt="Rails" style={{maxHeight: 150, maxWidth: 150}} />
            </Grid>

            <Grid key={2} item>
                    <img src={RubyIcon} alt="Ruby" style={{maxHeight: 150, maxWidth: 150}} />
            </Grid>

            <Grid key={2} item>
                    <img src={PostgresqlIcon} alt="Postgresql" style={{maxHeight: 150, maxWidth: 150}} />
            </Grid>
        
            <Grid key={2} item>
                    <img src={MaterialUiIcon} alt="Material-ui" style={{maxHeight: 150, maxWidth: 150}} />
            </Grid>

        </Grid>
      </Grid>
      
    </Grid>
  );
}
