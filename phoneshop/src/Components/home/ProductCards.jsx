import StartFirebase from "../firebaseConfig/Index";
import React from "react";
import { ref, onValue } from 'firebase/database'
import { Card } from "react-bootstrap";

// Starter Firebase og gemmer referencen i variablen 'db'
const db = StartFirebase();

export class ProductCards extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: []
    }
  }

  componentDidMount() {
    const dbRef = ref(db.database, 'products');

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ "key": keyName, "data": data })
      })
      this.setState({ tableData: records }, () => {
        this.fetchImageUrls(); // Fetch image URLs after the state is updated
      });
    })
  }

  fetchImageUrls() {
    const updatedTableData = [...this.state.tableData];
    const errorIndexes = [];
  
    updatedTableData.forEach((row, index) => {
      const imageUrl = row.data.imageUrl;
      if (imageUrl) {
        updatedTableData[index].imageUrl = `${imageUrl}`;
      } else {
        updatedTableData[index].imageUrl = null;
        errorIndexes.push(index);
      }
    });
  
    this.setState({ tableData: updatedTableData, imageLoadErrors: errorIndexes });
  }
  
  

  render() {
    return (
      <div className="product-card-container product-card-row">
        {this.state.tableData.map((row, index) => (
          <Card key={index} className="product-card">
            {row.imageUrl && (
              <Card.Img src={row.imageUrl} className="product-image" />
            )}
            <Card.Body>
              <Card.Title>{row.data.name}</Card.Title>
              <Card.Text>{row.data.description}</Card.Text>
              <Card.Text>Price: {row.data.price}</Card.Text>
              <Card.Text>Quantity: {row.data.quantity}</Card.Text>
              <button className="button-addCart">Add to cart</button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
