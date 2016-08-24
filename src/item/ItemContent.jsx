import React, { Component } from 'react';

import './ItemContent.scss';

class ItemContent extends Component {
	getVolume() {
		if(this.props.volume) {
			return this.props.volume + 'ml';
		}

		return 'N/A';
	}
	render() {
		return (
			<div className="Item__content">
				<a href="#" class="Item__name">
					{this.props.name}
				</a>
				<ul class="Item__meta">
					<li class="Item__meta-item">
						{this.getVolume()}
					</li>
					<li class="Item__meta-item">
						{this.props.year}
					</li>
				</ul>
				<div class="Item_description">
					{this.props.Item_description}
				</div>
				<div class="Item__location">
					{this.props.location}
				</div>
			</div>
		)
	}
}

export default ItemContent;