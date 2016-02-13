import React from 'react';

import FilterLink from '../containers/filter_link';


const Footer = ({store}) => {
	return (

		<p>
			SHOW:
			{' '} <FilterLink filter='SHOW_ALL' store={store} >All</FilterLink>
			{', '}<FilterLink filter='SHOW_ACTIVE' store={store} >Active</FilterLink>
			{', '}<FilterLink filter='SHOW_COMPLETED' store={store} >Completed</FilterLink>
		</p>

	);
};


export default Footer;
