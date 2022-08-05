import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const { login } = useContext(PlayerContext)
  const navigate = useNavigate();
  //Need to add player context.

  return (

    <main className="navy">
      <section className="intro flex center align-center column">
        <h1 className="gold">Trivia Time</h1>
        <h2>A quiz game inspired by Trivial Pursuit.</h2>
        <div className="register-page">
          <div className="form-field">
            <label htmlFor="user-name">Enter A Username</label>
            <input 
              value={username}
              onChange={(e)=>{
                setUsername(e.target.value)
              }}
              type="text"
              id="user-name" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="form-field">
            <div className="flex space-between">
            <label htmlFor="password">Enter a Password</label>
            <span>
              <label htmlFor="check-box">Show Password</label>
              <input
                value={show}
                onChange={(e) => { setShow(e.target.checked) }}
                type="checkbox"
                name="register-checkbox"
                id="register-check-box"
                className="shadow appearance-none border  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </span>
            </div>
              <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                type={show === true ? "text" : "password"}
                id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              
          </div>
          <div className="form-field">
            <label htmlFor="confirm-password">Confirm Your Password</label>
            <input
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value)
              }}
              type={show === true ? "text" : "password"}
              id="confirm-password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            className="rounded bg-[#daa520] py-1 px-6"
            onClick={(e) => {
              e.preventDefault()
              console.log(password, confirm);
              if (confirm === password) {
                login(username)
                navigate("/game")
              }
            }}>
            Submit
          </button>
        </div>
    </section>
    </main>
  )
}

export default RegisterPage
