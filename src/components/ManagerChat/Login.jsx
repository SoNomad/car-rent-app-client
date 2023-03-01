import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import CarBrand from './Logo/CarBrand.png'
import styles from './Login.module.scss'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { loginRoute } from '../../utils/APIRoutes'

const Login = ({GetIsTrueFalse}) => {
  GetIsTrueFalse()
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username: '',
    password: '',
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
    const { password, username } = values

    if (password === '') {
      toast.error('Username and password is required', toastOptions)
      return false
    } else if (username.length === '') {
      toast.error('Username and password is required', toastOptions)
      return false
    }
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (handleValidation()) {
      const { password, username } = values
      const { data } = await axios.post(loginRoute, {
        username,
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
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Login in</button>
          <span>
            Don't have an account ? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login
