import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './SearchBar.css';

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
            <div className="search">
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <form onSubmit={this.handleSubmit} className="d-flex">
                       <input type="search" size="70" placeholder="Search" aria-label='Search' name='term' value={this.state.term} onChange={this.handleChange} /> 
                       <Button variant="danger" class="btn btn-outline-success" type="submit">Search</Button>
                </form>
            </div>
            </div>
        )};
}

export default SearchBar;