import StartFirebase from "../firebaseConfig/Index";
import React from "react";
import {ref, onValue} from 'firebase/database'
import { Table } from "react-bootstrap";

const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db, 'products');

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
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((row, index) => {
                        return(
                        <tr>
                            <td>{index}</td>
                            <td>{row.key}</td>
                            <td>{row.data.name}</td>
                            <td>{row.data.description}</td>
                            <td>{row.data.price}</td>
                            <td>{row.data.quantity}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}