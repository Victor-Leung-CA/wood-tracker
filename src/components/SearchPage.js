import React from 'react';
import SearchBar from "./SearchBar"
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/SearchPage.css"
import axios from 'axios';
import DisplayPanel from "./DisplayPanel"
import Graph from "./Graph"


export default class SearchPage extends React.Component {
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            woodOptions: [
                { value: "Balsa", label: "Balsa"},
                { value: "Ply", label: "Ply"},
                { value: "Fir", label: "Fir"},
                { value: "Spruce", label: "Spruce"},
            ],
            woodThickness: [
                { value: 0.03125, label: "1/32"},
                { value: 0.0625, label: "1/16"},
                { value: 0.125, label: "1/8"},
                { value: 0.25, label: "1/4"},
                { value: 0.5, label: "1/2"},
                { value: 1, label: "1"}
            ],
            searchedWood: {
                type: "",
                thickness: null,
                id: null,
                quantity: null,
                woodLog: []
            },
            showTable: 0
        }
    }

    onFormSubmit(wood, thickness){
        axios.get("/wood")
            .then(res => {
                let foundWood = 0;
                res.data.map(resInfo => {
                    if(resInfo.woodType === wood && resInfo.woodThickness === thickness){
                        this.setState({searchedWood:{
                            type: resInfo.woodType,
                            thickness: resInfo.woodThickness,
                            id: resInfo._id,
                            quantity: resInfo.woodQuantity,
                            woodLog: resInfo.woodLogs
                        }})

                        console.log(this.state.searchedWood.type + this.state.searchedWood.thickness + this.state.searchedWood.id)
                        foundWood = 1;
                        this.setState({showTable:1})
                    }
                    return null;
                })
                if(foundWood === 0){ alert("No wood in stock!") }
                return;
            });
    }

    render() {
        return(
            <div>
                

                <div className="searchPage">
                    <SearchBar 
                        woodOptions={this.state.woodOptions} 
                        woodThickness={this.state.woodThickness}
                        onFormSubmit={this.onFormSubmit}
                    />
                </div>

                <DisplayPanel showTable={this.state.showTable} tableInfo = {this.state.searchedWood} submitForm = {this.onFormSubmit}/>

                {this.state.showTable === 1 && <Graph tableInfo = {this.state.searchedWood}/> }


            </div>
        )
    }
}
