import React from "react";

export function Pets(){
    return(
        <div className="container">
            <h2 className="pet__title">Interacting with our pets</h2>
            {mama.map(ite => (
                <li className="pet__item">
                    <img src="" alt="" className="pet__photo"/>
                    <p className="pet__txt"></p>
                </li>
            ))}
            <button type="button" className="pet__btn">See more</button>
        </div>
        
    )
}