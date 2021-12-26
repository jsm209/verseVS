import React from 'react';

import { fontSizes } from "../helpers/Constants";

import { Link, useLocation } from "react-router-dom";

import Button from 'react-bootstrap/Button';

function ViewPoemScreen() {

    let sectionHeaderStyle = {
        textAlign: 'left',
        fontSize: fontSizes.large,
        fontWeight: 'bold'
    }

    let sectionContentStyle = {
        textAlign: 'left',
        fontSize: fontSizes.medium
    }

    let backButtonSpacer = {
        marginTop: "30px",
        marginBottom: "10px"
    }

    const location = useLocation()

    return(
        <div>        
            <div className="sectionStyleWhite">
                <div className="contentContainerStyle">
                    <h1 style={sectionHeaderStyle}>{location.state.title}</h1>
                    <p style={sectionContentStyle}> By {location.state.author}</p>
                </div>
            </div>

            <div className="sectionStyleBlack">
                <div className="contentContainerStyle">
                    <div style={sectionContentStyle} dangerouslySetInnerHTML={{__html: location.state.content}}>
                    </div>
                </div>
            </div>

            <div className="sectionStyleWhite">
                <div className="contentContainerStyle">
                    <p style={sectionContentStyle}> Contributors: {location.state.contributors.join(", ")}</p>
                </div>
            </div>

            <div style={backButtonSpacer}>
                    <Link to="/browse">
                        <Button 
                        variant="dark">
                            Back to  browse poems
                        </Button>
                    </Link>
            </div>
        </div>
    )
}

export default ViewPoemScreen;