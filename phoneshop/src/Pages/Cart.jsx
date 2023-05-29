import React from "react";
import CartItemDescription from "../Components/Cart/CartItemDescription";
import CartItemName from "../Components/Cart/CartItemName";
import CartItemPrice from "../Components/Cart/CartItemPrice";
import CartItemImage from "../Components/Cart/CartItemImage";
import RemoveItemButton from "../Components/Cart/RemoveItemButton";

const Cart = ({ cartItems, removeItem }) => {
  if (cartItems.length > 0) {
    return (
      <div style={{ margin: 50, padding: 50 }}>
        <h1 style={{margin: 50}}>Items in your shopping cart:</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.key}>
                <td>
                  <CartItemImage
                    imageUrl={item.imageUrl}
                    alternate={item.data.name}
                  />
                </td>
                <td>
                  <CartItemName name={item.data.name} />
                </td>
                <td>
                  <CartItemDescription description={item.data.description} />
                </td>
                <td>
                  <CartItemPrice price={item.data.price} />
                </td>
                <td>
                    <RemoveItemButton onClick={() => removeItem(item.key)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <p>Your cart is empty.</p>;
  }
};

export default Cart;
