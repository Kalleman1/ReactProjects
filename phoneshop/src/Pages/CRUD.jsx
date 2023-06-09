import React, { useState, useEffect, useContext } from 'react';
import StartFirebase from '../Components/firebaseConfig/Index';
import { ref, set, push, get } from 'firebase/database';
import { getStorage, ref as storageRef, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { AuthContext } from '../Components/Context/AuthContext';

function Crud() {
    const [db, setDb] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [imageFile, setImageFile] = useState(null)
    const [products, setProducts] = useState([])
    const [selectedProductId, setSelectedProductId] = useState('');
    const { user } = useContext(AuthContext);

    //Bruger useEffect hook til at starte firebase, og hente de products der er gemt i databasen.
    useEffect(() => {
        setDb(StartFirebase().database);
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

    //Returns værdierne for inputfelterne i formen.
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
    
      const storage = getStorage();
      const storageReference = storageRef(storage, `images/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageReference, imageFile);
    
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Upload progress monitoring if needed
        },
        (error) => {
          console.error('Error occurred during upload:', error);
        },
        async () => {
          try {
            const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
    
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
    
            await set(newProductRef, productData);
            alert('Data was added successfully');
          } catch (error) {
            alert('There was an error, details: ' + error);
          }
        }
      );
    }
    

    //Opdaterer et produkt i databasen
    async function updateData(){
      const data = getAllInputs();

      if (!selectedProductId){
        Alert('Please select a product in order to update!');
        return;
      }
      const selectedProduct = products.find((product) => product.id === selectedProductId);
      const imageUrl = selectedProduct.imageUrl

      //Opdaterer dataen i databasen
      const productRef = ref(db, `products/${selectedProductId}`);
      const productData = {
        name: data.name,
        description: data.description,
        price: data.price,
        quantity: data.quantity,
        imageUrl: imageUrl
      };

      try {
        await set(productRef, productData)
        alert ('data was updated successfully')
        //Opdaterer staten på et opdateret produkt 
        const updatedProducts = products.map((product) => {
          if (product.id === selectedProductId) {
            return { id: selectedProductId, ...productData };
          }
          return product;
        });
        setProducts(updatedProducts);
      } catch (error){
        alert('There waws an error updating the data, details: ' + error)
      }
    }

    //Sletter produkt fra databasen
    async function deleteData(){

      if (!selectedProductId){
        Alert('Please select a product to delete! :)')
      }

      const productRef = ref(db, `products/${selectedProductId}`);

      try {
        await set(productRef, null);
        alert('Product deleted successfully')
        //Opdaterer state på listen så produktet fjernes
        const updatedProducts = products.filter((product) => product.id !== selectedProductId);
        setProducts(updatedProducts)
      }
      catch(error){
        Alert('There was an error deleting data, details: ' + error)
      }
    }

    function interfaceHandler(event) {
        const id = event.target.id;

        if (id === 'addBtn') {
            addData();
        } else if (id === 'updateBtn') {
            updateData();
        } else if (id === 'deleteBtn') {
            deleteData();
        }
    }
    if(user !== null){
      return (
        <motion.div className='main' initial={{opacity: 0}} animate={{opacity: 1}}>
          <h1 className='main-header'>Create, Read, Update and delete products from the database</h1>
          <div className='crud-item'>
            <div className='crud-item-left'>
              <p>Select a product</p>
              <label htmlFor='namebox'>Enter Name</label>
              <label htmlFor='descriptionbox'>Enter Description</label>
              <label htmlFor='pricebox'>Enter Price</label>
              <label htmlFor='quantitybox'>Enter Quantity</label>
              <label htmlFor='imagebox'>Upload Image</label>
            </div>
            <div className='crud-item-right'>
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
                <option value=''>Add a new product</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
              <div className='height-20px'></div>
              <input
                type='text'
                id='namebox'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type='text'
                id='descriptionbox'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <input
                type='number'
                id='pricebox'
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              <input
                type='number'
                id='quantitybox'
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <div className='child'>
                <input type='file' id='imagebox' onChange={(e) => setImageFile(e.target.files[0])} />
              </div>
            </div>
          </div>
          <div>
          <button id='addBtn' onClick={interfaceHandler} className='button-crud'>
            Add Product
          </button>
          <button id='updateBtn' onClick={interfaceHandler} className='button-crud'>
            Update product
          </button>
          <button id='deleteBtn' onClick={interfaceHandler} className='button-crud'>
            Delete product
          </button>
          </div>
        </motion.div>
      );
    }
    else{
      return(
        <div className='notLoggedInDiv'>
          <p>Please login to use CRUD functionality!</p>
        </div>
      )
    }
}

export { Crud };
