import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select"
import "./css/WoodForm.css"
import axios from 'axios';

export default class WoodForm extends React.Component{

    constructor(props){
        super(props);
        this.handleChangeMethod = this.handleChangeMethod.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { 
            method: "",
            quantity: 0
        };
    }

    handleChangeMethod(input){
        this.setState({method: input.value});
    }

    handleChangeAmount(e){
        this.setState({quantity: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.method==="Use"){
            let submissionInfo = {
                woodType: this.props.tableInfo.type,
                woodThickness: this.props.tableInfo.thickness,
                amountUsed: this.state.quantity
            }
            axios.post("http://localhost:5000/wood/use", submissionInfo)
                .then((response) => {
                    console.log(response);
                    this.props.submitForm(this.props.tableInfo.type, this.props.tableInfo.thickness)
                })
                .catch((error) => {
                    alert("Invalid amount of wood!");
                });
        }
        else if(this.state.method==="Add"){
            let submissionInfo = {
                woodType: this.props.tableInfo.type,
                woodThickness: this.props.tableInfo.thickness,
                amountAdded: this.state.quantity
            }
            axios.post("http://localhost:5000/wood/update", submissionInfo)
                .then((response) => {
                    console.log(response);
                    this.props.submitForm(this.props.tableInfo.type, this.props.tableInfo.thickness)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <div className="woodFormContainer">
                <h3 className="searchBarTitle">Use/Add Wood</h3>
                <form onSubmit={this.handleSubmit}>
                    
                    <h6 className="formLabel">Method</h6>
                    <Select 
                        options = {[{value: "Add", label: "Add"}, {value: "Use", label: "Use"}]}
                        onChange= {this.handleChangeMethod} 
                        className="woodFormSelect" 
                        placeholder= "Use/Add"
                    />
                    <br /> <br />

                    <h6 className="formLabel">Amount</h6>
                    <input className="woodFormSelect woodFormInput" onChange={this.handleChangeAmount} type="number" min="0"></input>

                    <br /> <br />

                    <button className="btn btn-dark formButton">Submit</button>
                </form>

            </div>

            
          );
    }

}
  


