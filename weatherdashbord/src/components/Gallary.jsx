import React from "react";

export function Gallary(){
    return (
        <div className="containet">
            <div className="gallery">
                <h2 className="gallery__title">Beautiful nature</h2>
                {pd.map(item => (
                    <li className="gallery__item">
                        <img src="" alt="" className="gallary__photo"/>
                    </li>
                ))}
            </div>
        </div>
    )
}