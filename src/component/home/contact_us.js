import React, { Fragment,} from "react";
import "./home.css";
import MetaData from "../main.js";
import Footer from "../footer/footer"
import "../header/header.css"
import Header1 from "../header/header1";

const ContactUs  = ({ location }) => {
  const d="CONTACT US!";
  return (
    <Fragment>
      <MetaData title= "About us! BIZGLAMO"/>
      <Header1 data= {d}/>
      <section class="facilities" id="faci1">
        <div class="row" id="row6">
          <h3>Hi,</h3>
          <h2><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQMPJMgpnWmHWlRDfdZpbtDQfrntBFLHMtCltsfQsHSHtMmKJTmjcBPQJPfDKwJhqjHL" target="_blank">bizglamo@gmail.com</a></h2>
        </div>
      </section>
      <Footer/>
    </Fragment>
  );
};

export default ContactUs ;