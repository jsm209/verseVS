// TODO: Fix that the base path is undefined

// Firebase
import database from '../firebase';

const PoemService = {

    getPoem: (id) => {
        database.ref(process.env.REACT_APP_FIREBASE_BASE_PATH).child("poems/" + id).get().then( (snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch( (error) => {
            console.error(error);
        });
    },

    pushPoem: (poem) => {
        database.ref(process.env.REACT_APP_FIREBASE_BASE_PATH).push(poem)
    },

    setPoem: (id, poem) => {
        database.ref(process.env.REACT_APP_FIREBASE_BASE_PATH).child("poems/" + id).set(poem)
    },

    setAllPoems: (givenPoems) => {
        let poems = {}

        for (let i = 0; i < givenPoems.length; i++) {
            poems[givenPoems[i].id] = givenPoems[i]
        }

        database.ref(process.env.REACT_APP_FIREBASE_BASE_PATH).set({
            poems
        })
    },

}

export default PoemService