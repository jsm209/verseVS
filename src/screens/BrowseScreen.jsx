import React, { useState, useEffect } from 'react';
import PoemPreview from '../components/PoemPreview';
import PoemService from '../services/PoemService';
import { fontSizes } from "../helpers/Constants";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import Logo from '../components/Logo';

function BrowseScreen() {

    const [poemPreviews, setPoemPreviews] = useState([]);

    useEffect(() => {
       getAllPoems();
    });

    let getAllPoems = () => {
        PoemService.getAllPoems( (res) => {

            let myPoemPreviews = []

            // Loop over returned array of objects, transform them into poem preview components
            for (const property in res) {
                let poem = res[property]
                myPoemPreviews.push(<PoemPreview key={poem.author + "-" + poem.title +  "-" + poem.dateCreated} poem={poem} />)
            }

            setPoemPreviews(myPoemPreviews);

            //poemPreviews = poems.map( (poem) => <PoemPreview id={poem.author + "-" + poem.dateCreated} poem={poem} />)
            
        })

    }

    let headingStyle = {
        textAlign: 'left',
        fontSize: fontSizes.extraLarge,
        paddingTop: '30px',
        fontWeight: 'bold'
    }

    let subheadingStyle = {
        textAlign: 'left',
        fontSize: fontSizes.medium,
        paddingTop: '10px'
    }

    return(
        <div>
            <Logo />
            <div className="contentContainerStyleFixed">
                
                <h1 style={headingStyle}>Browse Screen</h1>
                <h1 style={subheadingStyle}>Read poems, write your own, or write with others.</h1>
                <h1 style={subheadingStyle}>Click on a poem to view it.</h1>

                <Link to="/new">
                        <Button 
                        variant="dark">
                            Create a new poem
                        </Button>
                </Link>

                {poemPreviews}

            </div>

        </div>
    )
}

export default BrowseScreen;