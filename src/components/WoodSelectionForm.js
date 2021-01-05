import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/WoodSelection.css"
import Select from "react-select"
import axios from 'axios';

const WoodSelectionForm = (props) => {

    const [woodInfo, setWoodInfo] = useState("");
    const [woodThickness, setThickness] = useState(0);
    const [woodQuantity, setQuantity] = useState(0);

    const handleChangeWood = (input) => {
        setWoodInfo(input.value);
    }

    const handleChangeThickness = (input) => {
        setThickness(input.value);
    }

    const handleChangeAmount = (e) => {
        setQuantity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let submissionInfo = {
            woodType: woodInfo,
            woodThickness: woodThickness,
            woodQuantity: woodQuantity
        }

        axios.post("/wood/add", submissionInfo)
            .then((response) => {
                alert("Wood added!");
            })
            .catch((error) => {
                if(error.message === "Request failed with status code 406"){
                    alert("Wood already exists!");
                }
                else{
                    alert(error);
                }
            });
    }

    return (
        <div className="woodSelectionContainer">
            <h3 className="searchBarTitle">Use/Add Wood</h3>
            <form onSubmit={handleSubmit}>
                
                <h6 className="formLabel">Wood Type</h6>
                <Select 
                        options = {[
                            { value: "Balsa", label: "Balsa"},
                            { value: "Fir", label: "Fir"},
                            { value: "Spruce", label: "Spruce"},
                            { value: "Ply", label: "Ply"},
                        ]}
                        onChange= {handleChangeWood} 
                        className="woodSelectionSelect" 
                        placeholder= "Type"
                />
                <br /> <br />

                <h6 className="formLabel">Thickness</h6>
                <Select 
                        options = {[
                            { value: 0.03125, label: "1/32"},
                            { value: 0.0625, label: "1/16"},
                            { value: 0.125, label: "1/8"},
                            { value: 0.25, label: "1/4"},
                            { value: 0.5, label: "1/2"},
                            { value: 1, label: "1"}
                        ]}
                        onChange= {handleChangeThickness} 
                        className="woodSelectionSelect" 
                        placeholder= "Thickness"
                />
                
                <br /> <br />

                <h6 className="formLabel">Amount</h6>
                <input type="number" increment="1" className="woodSelectionSelect woodSelectionInput" onChange={handleChangeAmount}  min="0"></input>
                <br /> <br />
                
                <button className="btn btn-dark formButton">Submit</button>
            </form>

        </div>

            
    );

}
  
export default WoodSelectionForm;

