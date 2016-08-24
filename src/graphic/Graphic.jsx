import React, { Component } from 'react';

import './Graphic.scss';

class Graphic extends Component {
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
			<div className="Graphic" title="Wine bottle graphic" style={styles}></div>
		)
	}
}

export default Graphic;