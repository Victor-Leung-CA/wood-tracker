import React from 'react';
import "./css/searchBar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select"

export default class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.handleChangeWood = this.handleChangeWood.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeThickness = this.handleChangeThickness.bind(this);
        this.state = { wood: "", thickness: 0};
    }

    handleChangeWood(input){
        this.setState({wood: input.value});
    }

    handleChangeThickness(input){
        this.setState({thickness: input.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onFormSubmit(this.state.wood, this.state.thickness);
    }

    render() {
        return (
            <div className="searchBarContainer container-fluid">
                <h3 className="searchBarTitle">View Wood Inventory</h3>
                <form onSubmit={this.handleSubmit}>
                    <Select 
                        options = {this.props.woodOptions} 
                        onChange={this.handleChangeWood} 
                        className="searchBar" 
                        placeholder= "Wood Type"
                    />
                    <Select 
                        options = {this.props.woodThickness} 
                        onChange={this.handleChangeThickness} 
                        className="searchBar" 
                        placeholder= "Wood Thickness"
                    />
                    
                    <button className = "btn btn-dark searchBarButton">Search</button>
                </form>

            </div>

            
          );
    }

}
  


