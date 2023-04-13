import React, { Fragment, useEffect } from "react";
import "./home.css";
import Card from "./card.js"
import MetaData from "../main.js";
import Header from "../header/header"
import midata from "../../images/data.json";
import Footer from "../footer/footer";


const Home = () => {
  const [mData ,setData]=React.useState(midata);
  return (
    <Fragment>
      <MetaData title="BIZGLAMO" />
      <Header/>
      <section class="facilities">
        <h2>Our Business Services</h2>
        <div class="row">
          {mData[0] &&
              mData[0].map((data) => (
                <Card  data={data} />
              ))}
        </div>
      </section>
      <Footer />

    </Fragment>
  );
};
export default Home;