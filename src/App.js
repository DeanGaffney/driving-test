import React, { Component } from 'react';
import './App.css';

import DataList from './components/DataList';
import Nav from './components/Nav';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<DataList />
			</div>
		);
	}
}

export default App;
