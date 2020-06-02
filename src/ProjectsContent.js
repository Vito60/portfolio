import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function ProjectsContent() {

  return (
    <div>
        <Typography variant="h3" component="h2">
            Caddy App
        </Typography>
        <Typography >
            An application that allows users to view and add information about professional 
            golfers. Client side was built with React using Redux for state management and 
            the backend is a Rails API using a Postgresql database. The styling was 
            done with Material-ui.
            <br></br>
            <a href={"https://flamboyant-easley-ea72bf.netlify.app/"}>Caddy App</a>
            <br></br>
            <a href={"https://github.com/Vito60/react-caddy-app-frontend"}>Github</a>
        </Typography>
        <Typography variant="h3" component="h2">
            Mechanic App
        </Typography>
        <Typography >
            A MVC style application built using Ruby on Rails. This application allows users 
            to create an account to store information about their vehicles and mechanics they 
            use for their vehicles. Utilized OMNIauth and Devise for user authentication 
            also used Oauth2 to allow users to create an account via Facebook. 
            <br></br>
            <a href={"https://www.youtube.com/watch?v=9WozoVoxqUc"}>Demo</a>
            <br></br>
            <a href={"https://github.com/Vito60/rails-project-mechanic-app"}>Github</a>
        </Typography>

    </div>
  );
}
