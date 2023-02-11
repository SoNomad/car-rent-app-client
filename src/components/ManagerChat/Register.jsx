import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import CarBrand from './Logo/CarBrand.png'
import styles from './Registr.module.scss'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { registerRoute } from '../../utils/APIRoutes'

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    theme: 'dark',
  }

  useEffect(() => {
    if (localStorage.getItem('chat-app-user')) {
      navigate('/chat')
    }
  }, [])

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values

    if (password !== confirmPassword) {
      toast.error('password and confirm password should be same', toastOptions)
      return false
    } else if (username.length < 3) {
      toast.error('Username should be greater than 3 characters', toastOptions)
      return false
    } else if (password.length < 8) {
      toast.error(
        'Password should be equal or greater than 8 characters',
        toastOptions
      )
      return false
    } else if (email === '') {
      toast.error('Email is required', toastOptions)
      return false
    }
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (handleValidation()) {
      const { password, username, email } = values
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      })
      if (data.status === false) {
        toast.error(data.message, toastOptions)
      }
      if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user))
        navigate('/chat')
      }
    }
  }

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div className={styles.FormContainer}>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className={styles.brand}>
            <img src={CarBrand} alt="" />
            <h1>samui</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Register
