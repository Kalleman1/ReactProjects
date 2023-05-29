import React from "react";

const CartItemImage = ({imageUrl, alternate}) => {
    return(
        <div style={{border: 5 }}>
             <img 
        src={imageUrl} 
        alt={alternate}
        style={{ width: "75px", height: "100px" }}></img>
        </div>
       
    )
}

export default CartItemImage;