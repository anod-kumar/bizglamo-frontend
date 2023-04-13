import React,{ Fragment} from "react";
import "./NotFound.css";
import "./header/header.css"
import MetaData from "./main.js" 

const NotFound = () => {
  return (
    <Fragment>
            <MetaData title="BIZGLAMO" />
            <section class="header">
                <nav>
                    <a href="index.html" class="logo" >BIZGLAMO</a>
                    <div class="nav-links" id="NavLinks">
                        <i class="fa fa-times" id="hide" onclick="hidemenu()"></i>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/about_us">ABOUT us</a></li>
                            <li><a href="/blog">BLOG</a></li>
                            <li><a href="/contact_us">CONTACT uS</a></li>
                        </ul>
                    </div>
                    <i class="fa fa-bars" id="show" onclick="showmenu()"></i>
                </nav>
                <div class="text-box">
                    <h1>404</h1>
                    <p>Page Not Found!</p>
                    <div className="btnn" id="btnn2">
                        <button><a href="/">Home</a></button>
                    </div>
                </div>

            </section>
        </Fragment>
  );
};

export default NotFound;