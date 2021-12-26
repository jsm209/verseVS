import React, { useState } from 'react';
import { placeholderText } from "../helpers/Constants";

import PoemService from '../services/PoemService';
import Poem from '../models/Poem';
import CTA from '../components/CTA';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Link, useLocation, Navigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';

function EditScreen() {

    let formContainer = {
        width: "500px",
        margin: "auto",
        paddingTop: "60px",
        display: "flex",
        flexDirection: "column"
    }

    let mainContentArea = {
        marginTop: "60px",
        marginBottom: "60px"
    }

    let contentSpacer = {
        marginTop: "15px",
        marginBottom: "15px"
    }

    let titleInputStyle = {
        border: "0",
        borderBottom: "2px solid",
        outline: "none",
        width: '280px',
        margin: 'auto'
    }

    let authorInputStyle = {
        border: "0",
        borderBottom: "2px solid",
        outline: "none",
        width: '200px',
        margin: 'auto'
    }


    let backButtonSpacer = {
        marginTop: "30px",
        marginBottom: "30px"
    }

    let deleteButtonStyle = {
        width: "300px",
        margin: "auto"
    }


    const location = useLocation()

    // Title of poem
    const [title, setTitle] = useState(location.state.title);

    // Text of poem
    const [poem, setPoem] = useState(location.state.content);

    // Is poem editable
    //

    const [author, setAuthor] = useState('');

    // Redirect back to home
    const [backToHome, setBackToHome] = useState();

    let submitPoem = () => {
        let oldPoem = location.state;

        console.log("old poem")
        console.log(oldPoem)
        
        let myPoem = Poem(title, "", false, poem.replace(/\s/g, '&nbsp;'))
        let date = new Date();

        // Updating existing poem data
        myPoem.author = oldPoem.author
        myPoem.dateCreated = oldPoem.dateCreated // updating date created to be accurate
        myPoem.lastModified = date.getTime()
        myPoem.id = oldPoem.id

        if (author === "") {
            myPoem.lastModifiedBy = placeholderText.poemUnnamed
        } else {
            myPoem.lastModifiedBy = author // add username here if you ever implement login
        }

        // Updating contributors array
        let newContributors = oldPoem.contributors;
        
        if (author === "" && !newContributors.includes(placeholderText.poemUnnamed)) {
            newContributors.push(placeholderText.poemUnnamed);
        } else if (!newContributors.includes(author)) {
            newContributors.push(author);
        }

        myPoem.contributors = newContributors

        console.log("Updated poem")
        console.log(myPoem)

        PoemService.setPoem(oldPoem.id, myPoem);
    }

    let handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    let handleDelete = () => {
        PoemService.deletePoem(location.state.id);
        setBackToHome(<Navigate to='/browse' />)
    }

    let handleAuthorChange = (e) => {
        setAuthor(e.target.value)
    }

    return(
        <div>
            <div style={formContainer}>
            <div style={contentSpacer}>
                    <input style={titleInputStyle} placeholder={placeholderText.poemTitleInput} value={title} onChange={handleTitleChange}/>
                </div>

                <div style={contentSpacer}>
                    <input style={authorInputStyle} placeholder={placeholderText.poemAuthorInput} value={author} onChange={handleAuthorChange}/>
                </div>
                
                <div style={mainContentArea}>
                    <ReactQuill theme="snow" value={poem} onChange={setPoem} />
                </div>

                <Link to="/browse">
                    <Button variant="dark" onClick={submitPoem}>
                        Submit Changes
                    </Button>
                </Link>

                {backToHome}
                
                <div style={backButtonSpacer}>
                    <Link to="/browse">
                        <Button 
                        variant="dark">
                            Actually, I don't feel like editing this poem
                        </Button>
                    </Link>
                </div>

                <div style={deleteButtonStyle}>
                    <CTA label="Delete this poem" title="Delete Poem" prompt="Are you sure you want to delete this poem?" callback={handleDelete} callbackText="Delete poem"/>
                </div>

            </div>

        </div>
    )
}

export default EditScreen;