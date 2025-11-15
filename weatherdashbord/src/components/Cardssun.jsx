import React from "react";

export function Cardssun(){
    return(
        <div className="container">
        {items.map(item=>(
            <li className="weather__item">
                <ul className="weath__list">
                    <li className="weath_elem"></li>
                    <li className="weath_elem"></li>
                </ul>
                <p className="weath__time"></p>
                <button className="weath__btn">Hourly forecast</button>
                <div className="weath__box">
                    <p className="weath__box-time"></p>
                    <p className="weath__box-day"></p>
                </div>
                <img src="" alt="" className="weath__icon" />
                <p className="weath__degree"></p>
                <div className="weath__box-like">
                    <button className="weath__btn-ico">svg</button>
                    <button className="weath__btn-ico">svg</button>
                    <button className="weath__btn-see">See more</button>
                    <button className="weath__btn-ico">svg</button>
                </div>
            </li>
        ))}
        </div>
    )
}