import { Route, Routes } from "react-router";
import ContactsBar from "./components/ContactsBar/ContactsBar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import ManagerChat from "./components/ManagerChat/ManagerChat";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";
import Conditions from "./pages/Conditions/Conditions";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Header />
      <ContactsBar />
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/conditions" element={<Conditions />} />
        </Routes>
      </Layout>
      <ManagerChat />
      <Footer />
    </div>
  );
}

export default App;
