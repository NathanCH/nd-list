import React, { Component } from 'react';

import './Menu.scss';

class Menu extends Component {
	render() {
		return (
			<ul className="Menu">
				<li className="Menu__item">
					Add to Cart
					<i className="Menu__icon ion-android-radio-button-off"></i>
				</li>
				<li className="Menu__item Menu__item--inline">
					Favorite
					<i className="Menu__icon ion-android-favorite-outline"></i>
				</li>
				<li className="Menu__item Menu__item--inline">
					More
					<i className="Menu__icon ion-android-menu"></i>
				</li>
			</ul>
		)
	}
}

export default Menu;