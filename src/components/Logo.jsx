import React from "react";

import { Link } from "react-router-dom";

function Logo() {

    let logoStyle = {
        margin: 'auto',
        width: '200px',
        height: 'auto',
        paddingTop: "30px",
        paddingBottom: "30px"
    }

    return(
        <div>
            <Link to="/home">
                <img style={logoStyle} src="versevs-logo-vector.svg" alt="verse verse logo"/>
            </Link>
        </div>
    )
}

export default Logo;