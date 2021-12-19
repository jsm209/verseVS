import React from "react";
import { fontSizes } from "../helpers/Constants";

// Given a Poem object as a prop
function PoemPreview(props) {

    let cardStyle = {
        width: "600px",
        height: "100px",
        borderRadius: "8px",
        boxShadow: "2px 2px 2px #9E9E9E",
        backgroundColor: "#F0EAD6",
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
        paddingLeft: "20px",
        paddingRight: "20px",
        margin: "5px"
    }

    let subtitleStyle = {
        fontSize: fontSizes.small,
        paddingLeft: "20px",
        paddingRight: "20px",
        margin: "5px"
    }

    let subtitleFlexbox = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flexStart"
    }

    function formatTitle(title, charLimit) {
        if (title.length < charLimit) {
            return title
        } else {
            return title.substring(0, charLimit - 4) + " ..."
        }
    }

    return(
        <div style={cardStyle}>
                <p style={titleStyle}>{formatTitle(props.poem.title, 50)}</p>
                <div style={subtitleFlexbox}>
                    <p style={subtitleStyle}>Created by {props.poem.author}</p>
                    <p style={subtitleStyle}>Last contributed to by {props.poem.lastModifiedBy}</p>
                </div>
                <div style={subtitleFlexbox}>
                    <p style={subtitleStyle}>Number of Lines: {props.poem.lines.length}</p>
                    <p style={subtitleStyle}>Created: {props.poem.dateCreated}</p>
                    <p style={subtitleStyle}>Last Modified: {props.poem.lastModified}</p>
                </div>

        </div>
    )
}

export default PoemPreview;