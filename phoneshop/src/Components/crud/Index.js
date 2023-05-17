import React, { useState, useEffect } from 'react';
import StartFirebase from '../firebaseConfig/Index';
import { ref, set, push } from 'firebase/database';
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL} from 'firebase/storage';

function Crud() {
    const [db, setDb] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [imageFile, setImageFile] = useState(null)


    useEffect(() => {
        setDb(StartFirebase());
    }, []);

    function getAllInputs() {
        return {
            name: name,
            description: description,
            price: Number(price),
            quantity: Number(quantity),
            imageFile: imageFile
        };
    }

    async function addData() {
        const data = getAllInputs();
      
        // Upload image file to Firebase storage
        const storage = getStorage();
        const imageRef = storageRef(storage, `images/${imageFile.name}`);
        const snapshot = await uploadBytes(imageRef, imageFile);
      
        // Get download URL for the uploaded image
        const imageUrl = await getDownloadURL(imageRef);
      
        // Add product data to Firestore
        const productsRef = ref(db, 'products');
        const newProductRef = push(productsRef);
        const newProductId = newProductRef.key;
        
        const productData = {
          id: newProductId,
          name: data.name,
          description: data.description,
          price: data.price,
          quantity: data.quantity,
          imageUrl: imageUrl,
        };
      
        // Set product data in the database
        try {
          await set(newProductRef, productData);
          alert('Data was added successfully');
        } catch (error) {
          alert('There was an error, details: ' + error);
        }
      }

    function interfaceHandler(event) {
        const id = event.target.id;

        if (id === 'addBtn') {
            addData();
        } else if (id === 'updateBtn') {
            // updateData();
        } else if (id === 'deleteBtn') {
            // deleteData();
        } else if (id === 'selectBtn') {
            // selectData();
        }
    }

    return (
        <>
        <div>
        <label>Enter Name</label>
            <input
                type="text"
                id="namebox"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            ></input>
        </div>
        <div>
        <label>Enter Description</label>
            <input
                type="text"
                id="descriptionbox"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            ></input>
        </div>
        <div>
        <label>Enter Price</label>
            <input
                type="number"
                id="pricebox"
                value={price}
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
            ></input>
        </div>
        <div>
        <label>Enter Quantity</label>
            <input
                type="number"
                id="quantitybox"
                value={quantity}
                onChange={(e) => {
                    setQuantity(e.target.value);
                }}
            ></input>
        <label>Upload Image</label>
        <input type='file' onChange={(e) => setImageFile(e.target.files[0])}/>
        </div>
            <button id="addBtn"  onClick={interfaceHandler}>
                Add data
            </button>
            <button id="updateBtn" onClick={interfaceHandler}>
                Update data
            </button>
            <button id="deleteBtn" onClick={interfaceHandler}>
                Delete data
            </button>
            <button id="selectBtn" onClick={interfaceHandler}>
                Get data from DB data
            </button>
        </>
    );
}

export { Crud };
