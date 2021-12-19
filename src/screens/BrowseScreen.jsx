import React from 'react';
import Poem from '../models/Poem';
import PoemPreview from '../components/PoemPreview';

import PoemService from '../services/PoemService';

function BrowseScreen() {

    let testPoem = Poem("Test poem about quick foxes jumping over lazy dogs", "author-1", false, ["Line 1", "and Line 2"])

    let testPoems = [
        testPoem,
        Poem("This is my first test poem, hopefully it turns out cool", "author-1", false, ["Line 1", "and Line 2", "line 3"]),
        Poem("second test test poem", "author here", false, ["Line 1", "and Line 2"]),
        Poem("another cool poem wao", "author3", false, ["Line 1", "and Line 2", "334", "sdsdf"])
    ];

    let poemPreviews = testPoems.map( (poem) => <PoemPreview id={poem.author + "-" + poem.dateCreated} poem={poem} />)

    let pushRandomPoem = () => {
        PoemService.setAllPoems(testPoems)
    }

    let updateOnePoem = () => {
        testPoem.title = "changed title"

        PoemService.setPoem(testPoem.id, testPoem)
    }

    let getFirstPoem = () => {
        PoemService.getPoem(testPoem.id)
    }

    return(
        <div>
            <h1>Browse Screen</h1>
            <div>
                {poemPreviews}
                <button onClick={pushRandomPoem}>
                    Push random poem
                </button>
                <button onClick={updateOnePoem}>
                    Update first poem
                </button>
                <button onClick={getFirstPoem}>
                    get first poem
                </button>
            </div>
        </div>
    )
}

export default BrowseScreen;