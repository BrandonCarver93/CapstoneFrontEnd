import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
            this.state = {
            term: "",
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterWines(this.state.term);
    };
    render() {
        return(
            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <form onSubmit={this.handleSubmit} className="d-flex">
                       <input type="search" placeholder="Search" aria-label='Search' name="term" value={this.state.term} onChange={this.handleChange} /> 
                       <button type='submit'>Search</button>
                </form>
            </div>
        )};
}

export default SearchBar;