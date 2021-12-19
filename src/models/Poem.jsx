import { v4 as uuidv4 } from 'uuid';

// Creates and returns a poem object
// title - title of poem
// author - ID of user that created this poem
// isEditable - boolean representing if poem can be edited by other authors
// lines - array of strings representing each distinct part of the poem

function Poem(
    title = "",
    author = "",
    isEditable = false,
    lines = [""]
) {

    let date = new Date();

    return {
        id: uuidv4(),
        title: title,
        dateCreated: date.getTime(),
        lastModified: date.getTime(),
        author: author,
        lastModifiedBy: "",
        isEditable: isEditable,
        lines: lines
    }
}

export default Poem;