import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/DisplayTable.css"

export default class DisplayTable extends React.Component{

    render() {
        return (
            <div className="displayTableContainer">
                <table className="table  displayTable">
                    <thead >
                        <tr>
                        <th scope="row"> <h5><b>Description</b></h5></th>
                        <th scope="row"> <h5><b>Value</b></h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col"><p>Wood Type</p></th>
                            <td><p>{this.props.tableInfo.type}</p></td>
                        </tr>
                        <tr>
                            <th scope="col"><p>Wood Thickness (in)</p></th>
                            <td><p>{this.props.tableInfo.thickness}</p></td>
                        </tr>
                        <tr>
                            <th scope="col"><p>Quantity Available</p></th>
                            <td><p>{this.props.tableInfo.quantity}</p></td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        );
    }
    
}