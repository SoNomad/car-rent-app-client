import { useState } from 'react';
import { Route, Routes } from 'react-router';
import ContactsBar from './components/ContactsBar/ContactsBar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Links from './components/Links';
import Login from './components/ManagerChat/Login';
import ManagerChat from './components/ManagerChat/ManagerChat';
import Register from './components/ManagerChat/Register';
import SetAvatar from './components/ManagerChat/SetAvatar';
import AboutUs from './pages/AboutUs/AboutUs';
import Blog from './pages/Blog/Blog';
import BookingPage from './pages/BookingsPage/BookingPage';
import Conditions from './pages/Conditions/Conditions';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  const [isTrue, setIsTrue] = useState(true);

  const GetIsTrueFalse = () => {
    setIsTrue(false);
  };

  return (
    <div className="App">
      {isTrue && <Header />}
      {isTrue && <ContactsBar />}
      {isTrue && <Links />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/register" element={<Register GetIsTrueFalse={GetIsTrueFalse} />} />
        <Route path="/login" element={<Login GetIsTrueFalse={GetIsTrueFalse} />} />
        <Route path="/setAvatar" element={<SetAvatar GetIsTrueFalse={GetIsTrueFalse} />} />
        <Route path="/chat" element={<ManagerChat GetIsTrueFalse={GetIsTrueFalse} />} />
      </Routes>
      {isTrue && <Footer />}
    </div>
  );
}

export default App;
