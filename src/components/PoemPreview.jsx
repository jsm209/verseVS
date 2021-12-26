import React from "react";
import { fontSizes } from "../helpers/Constants";
import { Link } from "react-router-dom";

// Given a Poem object as a prop
function PoemPreview(props) {

    let cardStyle = {
        width: "600px",
        height: "150px",
        borderRadius: "8px",
        boxShadow: "2px 2px 2px #9E9E9E",
        backgroundColor: "#fffafa",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        marginTop: "20px",
        marginBottom: "20px"
    }

    let titleStyle = {
        fontSize: fontSizes.large,
        textAlign: "left",
        paddingLeft: "15px",
        paddingRight: "20px",
        margin: "5px"
    }

    let subtitleStyle = {
        fontSize: fontSizes.small,
        paddingLeft: "20px",
        paddingRight: "20px"
    }

    let subtitleEditStyle = {
        fontSize: fontSizes.small,
        paddingLeft: "20px",
        paddingRight: "20px",
        margin: "5px",
        textAlign: "right"
    }

    let subtitleFlexbox = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flexStart"
    }

    let bold = {
        fontWeight: "bold"
    }

    function formatTitle(title, charLimit) {
        if (title.length < charLimit) {
            return title
        } else {
            return title.substring(0, charLimit - 4) + " ..."
        }
    }

    function formatDate(dateTime) {

        let d = new Date(dateTime);
        let dateString = "";

        dateString = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " at " + d.getHours() + ":" + d.getMinutes();

        return dateString;
    }

    return(
        <div style={cardStyle}>
            <Link to="/view" state={props.poem} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <p style={titleStyle}>{formatTitle(props.poem.title, 50)}</p>
                <div style={subtitleFlexbox}>
                    <p style={subtitleStyle}>Created by <span style={bold}>{props.poem.author}</span></p>
                    <p style={subtitleStyle}>Last contributed to by <span style={bold}>{props.poem.lastModifiedBy}</span></p>
                    <p style={subtitleStyle}>Contributors {props.poem.contributors.length}</p>
                </div>
                <div style={subtitleFlexbox}>
                    <p style={subtitleStyle}>Created: {formatDate(props.poem.dateCreated)}</p>
                    <p style={subtitleStyle}>Last Modified: {formatDate(props.poem.lastModified)}</p>
                </div>
            </Link>
            <Link to="/edit" state={props.poem}>
                <p style={subtitleEditStyle}>Edit poem</p>
            </Link>
        </div>
    )
}

export default PoemPreview;