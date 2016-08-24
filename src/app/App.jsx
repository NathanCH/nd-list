import React, { Component } from 'react';

import Store from '../store/Store.jsx';
import List from '../list/List.jsx';

import './App.scss';

class App extends Component{
	constructor() {
		super();
		this.state = {
			data: []
		}
		this.store = new Store();
	}
	componentDidMount() {
		this.store.get(response => {
			this.setState({
				data: response
			});
		});
	}
	render() {
		return (
			<div className="App">
				<div className="App__title">
					Wines
				</div>
				<List wines={this.state.data} />
			</div>
		);
	}
}

export default App;