import React, { Component } from 'react';

import './ItemGraphic.scss';

class ItemGraphic extends Component {
	displayGraphic() {
		if(this.props.src.url) {
			return this.props.src.url;
		}

		return 'http://placehold.it/300x500';
	}
	render() {
		var styles = {
			backgroundImage: 'url('+this.displayGraphic()+')'
		};
		return (
			<div className="Item__graphic" style={styles}></div>
		)
	}
}

export default ItemGraphic;