import StartFirebase from "./firebaseConfig/Index";
import React from "react";
import {ref, onValue, Database} from 'firebase/database'
import { Card } from "react-bootstrap";
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';

//Starter Firebase og gemmer referencen i variablen 'db'
const db = StartFirebase();

export class ProductCards extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    //Kører når komponenten er monteret på DOM'en
    componentDidMount(){
        const dbRef = ref(db.database, 'products');

        //Lytter efter ændringer i produkterne i databasen
        onValue(dbRef,(snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data":data})
            })
            this.setState({tableData: records})
        })
    }

    render(){
        return(
          <div className="product-card-container product-card-row">
          {this.state.tableData.map((row, index) => {
            // Get download URL for product image
            const storage = getStorage();
            const imageRef = storageRef(storage, `images/${row.data.imageUrl}`);
            getDownloadURL(imageRef).then((url) => {
              // Set state with download URL for product image
              this.setState(prevState => ({
                tableData: [
                  ...prevState.tableData.slice(0, index),
                  {...prevState.tableData[index], imageUrl: url},
                  ...prevState.tableData.slice(index + 1)
                ]
              }));
            }).catch((error) => {
              console.log('Error getting image download URL:', error);
            });
    
            return (
              <Card key={index} className="product-card">
              <Card.Img src={row.data.imageUrl} className="product-image" />
              <Card.Body>
                <Card.Title>{row.data.name}</Card.Title>
                <Card.Text>{row.data.description}</Card.Text>
                <Card.Text>Price: {row.data.price}</Card.Text>
                <Card.Text>Quantity: {row.data.quantity}</Card.Text>
                <button className="button-addCart">Add to cart</button>
              </Card.Body>
            </Card>
            )
          })}
        </div>
        )
    }
}