import React, { useState } from 'react';
import { placeholderText } from "../helpers/Constants";

import PoemService from '../services/PoemService';
import Poem from '../models/Poem';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';

function NewPoemScreen() {

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
        marginBottom: "10px"
    }

    const [title, setTitle] = useState('');

    const [author, setAuthor] = useState('');

    const [poem, setPoem] = useState('');

    let submitPoem = () => {

        let myAuthor = author

        if (author === "") {
            myAuthor = placeholderText.poemUnnamed
        }

        let myPoem = Poem(title, myAuthor, false, poem.replace(/\s/g, '&nbsp;'))
        myPoem.contributors = [myAuthor]

        console.log("Pushed poem:");
        console.log(myPoem); 
        PoemService.setPoem(myPoem.id, myPoem);
    }

    let handleTitleChange = (e) => {
        setTitle(e.target.value)
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
                    <Button 
                    variant="dark"
                    onClick={submitPoem}>
                        Create this new poem
                    </Button>
                </Link>

                <div style={backButtonSpacer}>
                    <Link to="/browse">
                        <Button 
                        variant="dark">
                            Actually, I don't feel like making a poem
                        </Button>
                    </Link>
                </div>
 
            </div>

        </div>
    )
}

export default NewPoemScreen;