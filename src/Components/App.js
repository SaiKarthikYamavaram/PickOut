import React, { Component } from "react";
// import axios from "axios";
import unsplash from "../API/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
export default class App extends Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await unsplash.get("search/photos", {
			params: { query: term },
		});
		this.setState({ images: response.data.results });
		console.log(response.data.results);
	};
	render() {
		return (
			<div className='ui container' style={{ margin: 10 }}>
				<SearchBar onSearch={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}
