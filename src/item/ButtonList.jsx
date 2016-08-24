import React, { Component } from 'react';

import './ButtonList.scss';

class ButtonList extends Component {
	render() {
		return (
			<ul className="ButtonList">
				<li class="ButtonList__item ButtonList__item--block">
					Add to Cart
				</li>
				<li class="ButtonList__item">
					Favorite
				</li>
				<li class="ButtonList__item">
					More
				</li>
			</ul>
		)
	}
}

export default ButtonList;