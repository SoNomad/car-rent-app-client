import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from './logo.png';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </NavLink>
      <div className={styles.navbar}>
        <NavLink to="/conditions">Условия аренды</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
        <NavLink to="/about">О компании</NavLink>
        <NavLink to="/chat">Онлайн чат для клиентов</NavLink>
      </div>
      <Typography variant="h6" sx={{ color: 'white' }}>
        <NavLink to="/bookings">Вход/Регистрация</NavLink>
      </Typography>
    </div>
  );
};

export default Header;
