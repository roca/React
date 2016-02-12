import React from 'react';

import FilterLink from './filter_link';


const Footer = ({visibilityFilter,onFilterClick}) => {
	return (

		<p>
			SHOW:
			{' '}<FilterLink onClick={onFilterClick} filter='SHOW_ALL' currentFilter={visibilityFilter}>All</FilterLink>
			{', '}<FilterLink onClick={onFilterClick} filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>Active</FilterLink>
			{', '}<FilterLink onClick={onFilterClick} filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>Completed</FilterLink>
		</p>

	);
};


export default Footer;
