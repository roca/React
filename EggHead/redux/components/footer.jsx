import React from 'react';

import FilterLink from '../containers/filter_link';


const Footer = () => {
	return (

		<p>
			SHOW:
			{' '} <FilterLink filter='SHOW_ALL' >All</FilterLink>
			{', '}<FilterLink filter='SHOW_ACTIVE' >Active</FilterLink>
			{', '}<FilterLink filter='SHOW_COMPLETED' >Completed</FilterLink>
		</p>

	);
};




export default Footer;
