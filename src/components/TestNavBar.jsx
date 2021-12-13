import React from "react";

// React Router
import { Link } from "react-router-dom";


function TestNavBar() {

    return(
        <div>

            <Link to="/home">
                <p>To home</p>
            </Link>
            
            <Link to="/register">
                <p>To register</p>
            </Link>
            
            <Link to="/login">
                <p>To login</p>
            </Link>
            
            <Link to="/browse">
                <p>To browse</p>
            </Link>
            
            <Link to="/edit">
                <p>To edit</p>
            </Link>
                
        </div>
    )
}

export default TestNavBar;