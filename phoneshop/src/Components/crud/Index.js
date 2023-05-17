import React, { useState, useEffect } from 'react';
import StartFirebase from '../firebaseConfig/Index';
import { ref, set, push, get } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

function Crud() {
    const [db, setDb] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [imageFile, setImageFile] = useState(null)
    const [products, setProducts] = useState([])
    const [selectedProductId, setSelectedProductId] = useState('');

    //Bruger useEffect hook til at starte firebase, og hente de products der er.
    useEffect(() => {
        setDb(StartFirebase());
        const fetchProducts = async () => {
            const productsRef = ref(db, 'products');
            const productsSnapshot = await get(productsRef);
            const productsList = [];

            productsSnapshot.forEach((product) => {
                const productId = product.key;
                const productData = product.val();
                productsList.push({ id: productId, ...productData });
            });

            setProducts(productsList);
        };
        fetchProducts();
    }, [db]);

    //Får fat i alle inputs i formen
    function getAllInputs() {
        return {
            name: name,
            description: description,
            price: Number(price),
            quantity: Number(quantity),
            imageFile: imageFile
        };
    }

    //Tilføjer nyt Product til database
    async function addData() {
        const data = getAllInputs();

        // Upload image file to Firebase storage
        const storage = getStorage();
        const imageRef = storageRef(storage, `images/${imageFile.name}`);

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
        }
    }

    return (
        <div className='main'>
            <h1 className='main-header'>Create, Read, Update and delete products from the database</h1>
                <p>Select a product you want to update/delete, or add a new one!</p>
                <select
                    value={selectedProductId}
                    onChange={(e) => {
                        const selectedId = e.target.value;
                        setSelectedProductId(selectedId);

                        // Find the selected product by ID
                        const selectedProduct = products.find((product) => product.id === selectedId);

                        // Fill out the form with the selected product's data if a product is selected
                        if (selectedProduct) {
                            setName(selectedProduct.name);
                            setDescription(selectedProduct.description);
                            setPrice(selectedProduct.price);
                            setQuantity(selectedProduct.quantity);
                        } else {
                            // Clear the form fields if no product is selected
                            setName('');
                            setDescription('');
                            setPrice(0);
                            setQuantity(0);
                        }
                    }}
                >
                    <option value="">Add a new product</option>
                    {products.map((product) => (
                        <option key={product.id} value={product.id}>
                            {product.name}
                        </option>
                    ))}
                </select>
                <label>Enter Name</label>
                <input
                    type="text"
                    id="namebox"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <label>Enter Description</label>
                <input
                    type="text"
                    id="descriptionbox"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                ></input>
                <label>Enter Price</label>
                <input
                    type="number"
                    id="pricebox"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                />
                <label>Enter Quantity</label>
                <input
                    type="number"
                    id="quantitybox"
                    value={quantity}
                    onChange={(e) => {
                        setQuantity(e.target.value);
                    }}
                ></input>

            <div className='child'>
                <label>Upload Image</label>
                <input type='file' onChange={(e) => setImageFile(e.target.files[0])} />
            </div>


            
                <button id="addBtn" onClick={interfaceHandler} className='button-crud'>
                    Add Product
                </button>

                <button id="updateBtn" onClick={interfaceHandler} className='button-crud'>
                    Update currently selected product
                </button>

                <button id="deleteBtn" onClick={interfaceHandler} className='button-crud'>
                    Delete product
                </button>


        </div>
    );
}

export { Crud };
