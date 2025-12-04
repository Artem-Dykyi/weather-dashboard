import React from "react";
import { nanoid } from "nanoid";
import s from "../styles/Modal.module.scss";
import c from "../styles/Container.module.scss";

import { useEffect, useState } from "react";

export function Modal({ isOpen, onClose, setCurrentUser}) {
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  useEffect(() => {
    const saveUsers = localStorage.getItem("user");
    if (saveUsers) {
      setUser(JSON.parse(saveUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "username") setUserName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  }

function handleSubmit(e){
    e.preventDefault();

    const newUser = {
        id: nanoid(),
        userName,
        email,
        password
    }

    setCurrentUser(userName);
    onClose()

    setUser([...user, newUser])
    setUserName("")
    setEmail("")
    setPassword("")
    
}


  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={s.backdrop}>
        <div className={c.container}>
          <div className={s.modal}>
            <form action="" className={s.modal__form} onSubmit={handleSubmit}>
              <button onClick={onClose}>clo</button>
              <h2 className={s.modal__title}>Sign up</h2>
              <div className={s.modal__box}>
                <label className={s.modal__txt}>Username</label>
                <input
                  type="text"
                  name="username"
                  value={userName}
                  className={s.modal__input}
                  placeholder="Username"
                  onChange={handleChange}
                />
                <label className={s.modal__txt}>E-Mai</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className={s.modal__input}
                  placeholder="E-Mai"
                  onChange={handleChange}
                />
                <label className={s.modal__txt}>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  className={s.modal__input}
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <button className={s.modal__btn} type="submit">
                Sign up
              </button>
              <div className={s.modal__already_box}>
                <p className={s.modal__already_txt}>Already have an account?</p>
                <a href="./" className={s.modal__already_link}>
                  Log In
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
