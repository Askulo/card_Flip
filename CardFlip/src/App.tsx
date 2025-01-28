import React, { useState } from "react";
import { motion } from "framer-motion";

const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <motion.div
      style={{
        width: 200,
        height: 300,
        backgroundColor: isFlipped ? '#3498db' :'#e74c3c',
        diplay: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        cursor: "pointer"

      }}
      animate={{rotateY: isFlipped ? 180: 0}}
      onClick={()=> setIsFlipped(!isFlipped)}
      transition={{duration: 0.8}}
      >
      {isFlipped ? "Back" : "You flipped to front"}
      </motion.div>
    );
};

export default CardFlip;
