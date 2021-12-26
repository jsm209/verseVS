// TODO: Fix that the base path is undefined

import { DataHelper } from '../helpers/DataHelper'

// Firebase
import database from '../firebase';

const PoemService = {

    getPoem: (id) => {
        database.ref(process.env.REACT_APP_FIREBASE_BASE_PATH).child("poems/" + id).get().then( (snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                return snapshot
            } else {
                console.log("No data available");
            }
        }).catch( (error) => {
            console.error(error);
        });
    },

    // pushes a new poem, probably don't use this because firebase will generate its own ID instead of a UUID.
    pushPoem: (poem) => {
        database.ref(process.env.REACT_APP_FIREBASE_BASE_PATH).child("poems").push(poem)
    },

    // Use this for updating the poem as well, except update the poem's last modified data on the client side.
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

    // Takes in a callback, and will pass the variable along to the callback.
    getAllPoems: (callback) => {
        database.ref(process.env.REACT_APP_FIREBASE_BASE_PATH).child("poems/").get().then( (snapshot) => {
            if (snapshot.exists()) {
                callback(DataHelper.snapshotToArray(snapshot))
            } else {
                console.log("No data available");
            }
        }).catch( (error) => {
            console.error(error);
        });
    },

    deletePoem: (id) => {
        database.ref(process.env.REACT_APP_FIREBASE_BASE_PATH).child("poems/" + id).remove()
    }

}

export default PoemService