import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4">Movie Recommendation System</h1>
        <p className="lead">QRI Hackthon Project</p>
        <hr className="my-2" />
        <p>Welcome to our movie recommendation system, check out what movies are for you! more description here...</p>
      </Jumbotron>
    </div>
  );
};

export default Header;