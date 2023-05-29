import React from "react";

const RemoveItemButton = ({onClick}) => {
    return(
        <button className="cart-remove-btn" onClick={onClick}>X</button>
    )
}

export default RemoveItemButton;