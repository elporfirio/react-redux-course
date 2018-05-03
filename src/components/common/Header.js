import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to={'/'} activeClassName={'active'}>Home</IndexLink>
      {' | '}
      <Link to={'/about'} activeClassName={'active'}>Acerca de</Link>
      {' | '}
      <Link to={'/course'} activeClassName={'active'}>Cursos</Link>
    </nav>
  );
};

export default Header;
