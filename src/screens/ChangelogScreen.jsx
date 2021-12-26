import React from 'react';
import { fontSizes } from "../helpers/Constants";

import Logo from '../components/Logo';

function ChangelogScreen() {

    let sectionHeaderStyle = {
        textAlign: 'left',
        fontSize: fontSizes.large,
        fontWeight: 'bold'
    }

    let sectionContentStyle = {
        textAlign: 'left',
        fontSize: fontSizes.medium
    }

    return(
        <div>

            <Logo />

            <div className="sectionStyleWhite">
                <div className="contentContainerStyle">
                    <h1 style={sectionHeaderStyle}>Change Log</h1>
                    <div style={sectionContentStyle}>
                        <p>Below are planned features currently being added:</p>
                        <ul>
                            <li>Registeration and login system with Google</li>
                            <li>Comment system</li>
                            <li>Voting system</li>
                            <li>Filtering and poem categorization</li>
                            <li>Increasing poem shareability options</li>
                        </ul>  
                    </div>

       
                </div>
            </div>
            <div className="sectionStyleBlack">
                <div className="contentContainerStyle">
                    <p style={sectionContentStyle}><b>
                    1.1.0
                    </b></p>    
                    <ul style={sectionContentStyle}>
                        <li>Whitespace is preserved when creating new poems or editing existing poems.</li>
                        <li>Added this changelog page.</li>
                        <li>Added verseVS site icon to the browser tab instead of default React symbol.</li>
                    </ul>  
                    <p style={sectionContentStyle}><b>
                    1.0.0
                    </b></p>
                    <ul style={sectionContentStyle}>
                        <li> Initial update of verseVS. Includes complete flow of creating a new poem, 
                    editing or deleting existing poems, and viewing created poems.</li>
                        <li>Also includes 
                    educational content and important site information on the homepage.</li>
                    </ul>        
                </div>
            </div>
        </div>
    )
}

export default ChangelogScreen;