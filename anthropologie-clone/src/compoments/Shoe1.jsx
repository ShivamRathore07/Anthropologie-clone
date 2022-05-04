import React, { useState } from "react";
import styles from "./Shoe.module.css";

function Shoe1({ item }) {
    const [ig, setIg] = useState(true);
    const handleHover = () => {
        setIg(!ig);
        console.log(ig);
    };
    const handleOut = () => {
        setIg(!ig);
    };
    return (
        <div>
        <div >
            <div
            className={styles.image}
            key={item.id}
            style={{ position: "relative",
            // border:"1px solid red"
            }}
            >
                <img
                onMouseOver={handleHover}
                onMouseOut={handleOut}
                style={{
                    height: "415px",
                    width: "100%",
                    // border:" 1px solid red"
                }}
                src={ig ? item.img3 : item.img4}
                alt="image"
                />
                <p>{item.title1} </p>
                <p>{item.price1}</p>
                <div className={styles.quick}>Quickshop</div>
            </div>
        </div>
        </div>
    );
}

export default Shoe1;
