import './App.css';
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import Footer from './component/footer/footer';
import Home from './component/home/home';
import store from './store.js'
import NotFound from './component/NotFound';
import FirstPage from './component/mainpages/FirstPage';
import DataForm from "./component/dataform/Dataform"
import Success from './component/mainpages/success';
import AboutUs from './component/home/about';
import Blog from "./component/home/blog";
import ContactUs from "./component/home/contact_us";
import TCondition from './component/home/tCondition';
import PrivacyPolicy from './component/home/privacyPolicy';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service/:id" element={<FirstPage/>}/>
      <Route path="/service/request/:id" element={<DataForm/>}/>
      <Route path="/send_success" element={<Success/>}/>
      <Route path="/about_us" element={<AboutUs/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact_us" element={<ContactUs/>}/>
      <Route path="/terms_condition" element={<TCondition/>}/>
      <Route path="/privacy_policy" element={<PrivacyPolicy/>}/>
      <Route path='*'
          element={ window.location.pathname === "/process/payment" ? null : 
            <NotFound/>
          }
      />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
