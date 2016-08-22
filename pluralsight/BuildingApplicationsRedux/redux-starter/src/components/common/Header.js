import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
   return (
     <nav>
        <IndexLink to="/" activeClasName="active">Home</IndexLink>
        {" | "}
        <Link to="/about" activeClasName="active">About</Link>
     </nav>
   );
};

export default Header;
