import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import giphy from './Logo/giphy.gif'
import styles from './SetAvatar.module.scss'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { Buffer } from 'buffer'
import { setAvatarRoute } from '../../utils/APIRoutes'

const SetAvatar = () => {
  const api = 'https://api.multiavatar.com/45678945'
  const navigate = useNavigate()
  const [avatars, setAvatars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedAvatar, setSelectedAvatar] = useState(undefined)

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    theme: 'dark',
  }

  useEffect(() => {
    if (!localStorage.getItem('chat-app-user')) {
      navigate('/login')
    }
  }, [])

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error('Please select an avatar', toastOptions)
    } else {
      const user = await JSON.parse(localStorage.getItem('chat-app-user'))
      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      })

      if (data.isSet) {
        user.isAvatarImageSet = true
        user.avatarImage = data.image
        localStorage.setItem('chat-app-user', JSON.stringify(user))
        navigate('/chat')
      } else {
        toast.error('Error setting avatar. Please try again', toastOptions)
      }
    }
  }
  useEffect(async () => {
    const reqAxios = async () => {
      const data = []
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        )
        const buffer = new Buffer(image.data)
        data.push(buffer.toString('base64'))
      }
      setAvatars(data)
      setIsLoading(false)
    }
    reqAxios()
  }, [])

  return (
    <>
      {isLoading ? (
        <div className={styles.container}>
          {' '}
          <img src={giphy} alt="loader" className="loader" />{' '}
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.title_container}>
            <h1>Pick an avatar as your profile picture</h1>
          </div>
          <div className={styles.avatars}>
            {avatars.map((avatar, index) => {
              return (
                <div
                  key={index}
                  className={
                    selectedAvatar === index ? styles.selected : styles.avatar
                  }
                >
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              )
            })}
          </div>
          <button className={styles.submit_btn} onClick={setProfilePicture}>
            Set as Profile Picture
          </button>
        </div>
      )}

      <ToastContainer />
    </>
  )
}

export default SetAvatar
