import React from "react";

export function Modal(){
    <div className="modal">
        <form action="" className="modal__form">
            <h2 className="modal__title">Sign up</h2>
            <div className="modal__box">
                <label className="hero__txt">Username</label>
                    <input type="text" className="hero__input" placeholder="Username"/>
                <label className="hero__txt">E-Mai</label>
                    <input type="email" className="hero__input" placeholder="E-Mai"/>
                <label className="hero__txt">Password</label>
                    <input type="password" className="hero__input" placeholder="Password"/>
            </div>
            <button type="submit">Sign up</button>
            <div className="hero__already-bo">
                <p className="hero-already-txt">Already have an account?</p>
                <a href="" className="hero__already-link">Log In</a>
            </div>
        </form>
    </div>
}