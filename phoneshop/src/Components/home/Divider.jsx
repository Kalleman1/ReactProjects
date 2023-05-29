import React from "react";
import {motion} from 'framer-motion'

const Divider = () => {
    return(
        <motion.div className="divider"
        initial={{
            opacity:0
        }}
        animate={{
            opacity:1
        }}>
            <h1 className="divider-text">Products</h1>
        </motion.div>
    )
}

export default Divider;