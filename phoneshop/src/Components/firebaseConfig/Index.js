import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "XXX",
          authDomain: "XXX",
          databaseURL: "XXX",
          projectId: "XXX",
          storageBucket: "XXX",
          messagingSenderId: "XXX",
          appId: "XXX"
        };

        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app)
        const auth = getAuth(app)
        const storage = getStorage(app)
        return {app, database, auth, storage}
}
export default StartFirebase;
