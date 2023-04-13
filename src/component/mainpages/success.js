import React, { Fragment ,useState} from "react";
import MetaData from "../main.js";
import "../header/header.css";
import DehazeIcon from '@mui/icons-material/Dehaze';
import pic from "../../images/logo.jpeg"
import CloseIcon from '@mui/icons-material/Close';

const Success = () => {
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
        <Fragment>
            <MetaData title="BIZGLAMO" />
            <section class="header" id="headwh">
                <nav>
                    <a href="/" class="logo" ><img src={pic} alt="" /></a>
                    <div className="nav-links" id={navid}>
                        <button className="burbtn" id="hide" onClick={hidemenu}><CloseIcon /></button>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/about_us">ABOUT us</a></li>
                            <li><a href="/blog">BLOG</a></li>
                            <li><a href="/contact_us">CONTACT uS</a></li>
                        </ul>
                    </div>
                    <button className="burbtn" id={burid} onClick={showmenu}><DehazeIcon /></button>
                </nav>
                <div class="text-box">
                    <h1>Thank You</h1>
                    <p>Your Request has been send Successfully.For further update Check your Email !</p>
                    <div className="btnn" id="btnn2">
                        <button><a href="/">Go To Home</a></button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
export default Success;