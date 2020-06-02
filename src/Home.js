import React from 'react';
import AboutNav from './AboutNav'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PortfolioImage from './Images/PortfolioImage.png'

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    height: "100%"
  },
  media: {
    height: 800,
  },
  content: {
    textAlign: 'center',
    justifyContent: 'center'
  }
});

export default function Home() {
    const classes = useStyles();
  
    return (
        <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardActionArea className={classes.root}>
          <CardMedia
            className={classes.media}
            image={PortfolioImage}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              Full Stack Developer
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.content}>
         <AboutNav/>
        </CardActions>
      </Card>
      </Container>
    );
  }
