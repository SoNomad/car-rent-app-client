import { Route, Routes } from 'react-router';
import ContactsBar from './components/ContactsBar/ContactsBar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ManagerChat from './components/ManagerChat/ManagerChat';
import Navbar from './components/Navbar/Navbar';
import Blog from './pages/Blog/Blog';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactsBar />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <ManagerChat />
      <Footer />
    </div>
  );
}

export default App;
