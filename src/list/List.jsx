import React, { Component } from 'react';

import './List.scss';

import ListItem from './ListItem.jsx';

class List extends Component {
	render() {	
		return (
			<ul className="List">
				{this.props.wines.map((wine, key) => {
					return(
						<ListItem wine={wine} key={key} />
					);
				})}
			</ul>
		)
	}
}

List.propTypes = {
	wines: React.PropTypes.array
};

List.defaultProps = {
	wines: []
};

export default List;