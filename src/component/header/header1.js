import React,{useState} from "react";
import "./header1.css";
import DehazeIcon from '@mui/icons-material/Dehaze';
import pic from "../../images/logo.jpeg"
import CloseIcon from '@mui/icons-material/Close';

const Header1 = (data) => {
  const [burid,setBurid]=useState("show");
    const [navid,setNavid]=useState("");

    function hidemenu(){
        navid = setNavid("")
        burid=setBurid("")
    }
    function showmenu(){
        navid = setNavid("shownav")
        burid=setBurid("burhide")
    }
  return (
    <section class="header" id="headw">
          <nav>
                <a href="/" class="logo" ><img src={pic} alt="" /></a>
                <div className="nav-links" id={navid}>
                    <button className="burbtn" id="hide" onClick={hidemenu}><CloseIcon/></button>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/about_us">ABOUT us</a></li>
                        <li><a href="/blog">BLOG</a></li>
                        <li><a href="/contact_us">CONTACT uS</a></li>
                    </ul>
                </div>
                <button className="burbtn" id={burid} onClick={showmenu}><DehazeIcon /></button>
            </nav>
        <div class="text-box" id="textw">
          <h1>{data.data}</h1>
        </div>
      </section>
  );
};

export default Header1;