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
        </Typography>
    </div>
  );
}
