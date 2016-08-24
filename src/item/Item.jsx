import React, { Component } from 'react';

import './Item.scss';

import Graphic from '../graphic/Graphic.jsx';
import Menu from '../menu/Menu.jsx';

class Item extends Component {
	getVolume(string) {
		if(string) {
			return string + 'ml';
		}

		return 'N/A';
	}
	getPrice(number) {
		if(this.isPrice(number)) {
			var cents = number.toString().substr(-3);
			var dollars = number.toString().split('.')[0];

			return {
				dollars: '$' + dollars,
				cents: cents
			}
		}
		return {
			dollars: '- - ',
			cents: 'TBD'
		}
	}
	isPrice(number) {
		return !isNaN(parseFloat(number)) && isFinite(number);
	}
	render() {
		return (
			<div className="Item">
				<div className="Item__badge">
					{this.props.id}.
				</div>
				<div className="Item__graphic">
					<Graphic src={this.props.wine.images.bottle} />
				</div>
				<div className="Item__container">
					<div className="Item__content">
						<a href="#" className="Item__name">{this.props.wine.name}</a>
						<ul className="Item__meta">
							<li className="Item__meta-item">{this.getVolume(this.props.wine.volume)}</li>
							<li className="Item__meta-item">{this.props.wine.year}</li>
						</ul>
						<div className="Item__description">{this.props.wine.description.md}</div>
						<div className="Item__location">{this.props.wine.wineryName.long}</div>
					</div>
					<div className="Item__details">
						<div className="Item__price" title="Price per bottle">
							{this.getPrice(this.props.wine.price).dollars}
							<div className="Item__price-cents">
								{this.getPrice(this.props.wine.price).cents}
							</div>
						</div>
						<div className="Item__menu">
							<Menu />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Item;