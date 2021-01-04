import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayTable from "./DisplayTable"
import "./css/DisplayPanel.css"
import WoodForm from "./WoodForm"


export default class DisplayPanel extends React.Component{
    render() {
        return ( 
            <div className="displayPanel">
                <div className="row">
                    <div className="col-lg-5 displayCol">
                        {this.props.showTable === 1 && <DisplayTable tableInfo = {this.props.tableInfo} />}
                    </div>

                    <div className="col-lg-7 displayCol">
                        {this.props.showTable  === 1 && <WoodForm tableInfo = {this.props.tableInfo} submitForm = {this.props.submitForm}/>}
                    </div>
                </div>
            </div>
        );
    }

}