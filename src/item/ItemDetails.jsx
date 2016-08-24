import React, { Component } from 'react';

import './ItemDetails.scss';

class ItemDetails extends Component {
	getPrice() {
		if(this.isPrice(this.props.price)) {
			return '$' + this.props.price;
		}
		
		return this.props.price;
	}
	isPrice(string) {
		return !isNaN(parseFloat(string)) && isFinite(string);
	}
	render() {
		return (
			<div className="Item__details">
				<div class="Item__price">
					{this.getPrice()}
				</div>
				{this.props.children}
			</div>
		)
	}
}

export default ItemDetails;