import React, { Component } from "react";

class SearchBar extends Component {
	state = { term: "" };
	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
	// onInputClick(event) {
	// 	console.log("clicked");
	// }
	onFormSubmit = event => {
		event.preventDefault();
		// console.log(this.state.term);
		this.props.onSearch(this.state.term);
	};
	render() {
		return (
			<div className='ui segment '>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label htmlFor=''>Image Search</label>
						<input
							type='text'
							value={this.state.term}
							onChange={event =>
								this.setState({ term: event.target.value.toUpperCase() })
							} // Controlled Component

							// onChange={this.onInputChange} Uncontrolled Component
							// onClick={this.onInputClick }
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
