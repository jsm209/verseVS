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
    content = ""
) {

    let date = new Date();
    let id = uuidv4();

    return {
        id: id,
        title: title,
        dateCreated: date.getTime(),
        lastModified: date.getTime(),
        author: author,
        lastModifiedBy: author,
        isEditable: isEditable,
        content: content,
        contributors: []
    }
}

export default Poem;