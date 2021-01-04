import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/WoodSelectionPage.css"
import WoodSelection from "./WoodSelectionForm"

const WoodSelectionPage = (props) => {

  
    return (
      <div className="woodSelectionPageContainer">
        <WoodSelection />
      </div>
    );
}

export default WoodSelectionPage;