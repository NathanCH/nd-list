import React, { Component } from 'react';

import './ListItem.scss';

import Item from '../item/Item.jsx';
import ItemGraphic from '../item/ItemGraphic.jsx';
import ItemContent from '../item/ItemContent.jsx';
import ItemDetails from '../item/ItemDetails.jsx';
import ButtonList from '../item/ButtonList.jsx';

class ListItem extends Component {
	render() {
		return (
			<li className="List__item">
				<Item>
					<ItemGraphic src={this.props.wine.images.bottle} />
					<div className="Item__container">
						<ItemContent name={this.props.wine.name}
									 volume={this.props.wine.volume}
									 year={this.props.wine.year}
									 description={this.props.wine.description.md}
									 location={this.props.wine.wineryName.long} />
						<ItemDetails price={this.props.wine.price}>
							<ButtonList />
						</ItemDetails>
					</div>
				</Item>
			</li>
		)
	}
}

export default ListItem;