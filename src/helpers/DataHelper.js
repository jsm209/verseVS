import Poem from '../models/Poem';

export const DataHelper = {

    // Takes in a snapshot from firebase
    // Returns an array of poem objects
    snapshotToArray: (snapshot) => {

        var data = [];
    
        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;

            data.push(item);
        });
    
        let poemArr = [];

        for (let i = 0; i < data.length; i++) {

            let curData = data[i]

            let poem = Poem(
                "", //title
                "", //author
                false, //isEditable
                "" //content
            )

            if (curData.hasOwnProperty('id')) {
                poem.id = data[i].id
            }

            if (curData.hasOwnProperty('title')) {
                poem.title = data[i].title
            }

            if (curData.hasOwnProperty('dateCreated')) {
                poem.dateCreated = data[i].dateCreated
            }

            if (curData.hasOwnProperty('lastModified')) {
                poem.lastModified = data[i].lastModified
            }

            if (curData.hasOwnProperty('author')) {
                poem.author = data[i].author
            }

            if (curData.hasOwnProperty('lastModifiedBy')) {
                poem.lastModifiedBy = data[i].lastModifiedBy
            }

            if (curData.hasOwnProperty('isEditable')) {
                poem.isEditable = data[i].isEditable
            }

            if (curData.hasOwnProperty('content')) {
                poem.content = data[i].content
            }

            if (curData.hasOwnProperty('contributors')) {
                poem.contributors = data[i].contributors
            }

            poemArr.push(poem);

        }

        return poemArr;
    }
}

