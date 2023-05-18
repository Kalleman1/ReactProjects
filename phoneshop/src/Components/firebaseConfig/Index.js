import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyAxWej3-IcQKmWSueYI0rHpOjB6DBXINKU",
          authDomain: "webshopapi-8e079.firebaseapp.com",
          databaseURL: "https://webshopapi-8e079-default-rtdb.europe-west1.firebasedatabase.app/",
          projectId: "webshopapi-8e079",
          storageBucket: "webshopapi-8e079.appspot.com",
          messagingSenderId: "792485629459",
          appId: "1:792485629459:web:1323d6f63cd66b696839e6"
        };

        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app)
        const auth = getAuth(app)
        const storage = getStorage(app)
        return {app, database, auth, storage}
}
export default StartFirebase;