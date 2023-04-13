import React, { Fragment} from "react";
import "./home.css";
import MetaData from "../main.js";
import Footer from "../footer/footer"
import Header1 from "../header/header1";

const AboutUs = ({ location }) => {
  const d="ABOUT US!";
  return (
    <Fragment>
      <MetaData title= "About us! BIZGLAMO"/>
      <Header1 data= {d}/>
      <section class="facilities" id="faci1">
        <div class="row" id="row1">
          <p className="para1">Welcome to BIZGLAMO Business Consultancy</p>
          <p className="para1">where we help businesses thrive exponentially. Our team of experienced consultants offers a wide range of services to help you reach your full potential. From strategic planning to market analysis, we provide customized solutions to drive growth and success. Whether you're a small startup or a large corporation, our goal is to help you achieve your business objectives. Let us work with you to create a plan for success and take your business to the next level. Contact us today to schedule a consultation</p>
          
        </div>
      </section>
      <Footer/>
    </Fragment>
  );
};

export default AboutUs;