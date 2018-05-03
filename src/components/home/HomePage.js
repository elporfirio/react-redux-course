import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className={'jumbotron'}>
        <h1>Adminitrador</h1>
        <p>React, Redux etc app</p>
        <Link to={'about'} className={'btn btn-primary btn-lg'}>About this</Link>
      </div>
    );
  }
}

export default HomePage;
