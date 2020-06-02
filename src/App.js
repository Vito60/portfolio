import React, {Component} from 'react';
import Nav from './Nav'
import Home from './Home'
import ProgrammingImage from './Images/ProgrammingImage.png'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
      return (
        <div style={{backgroundImage: `url(${ProgrammingImage})`,
        backgroundRepeat: 'false',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        }}>
          <Nav/>
          <Switch> 
            <Route exact path="/" component={Home}/> 
          </Switch>
        </div>
      )
  }

}

export default App;
