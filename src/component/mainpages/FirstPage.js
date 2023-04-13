import React, { Fragment, useRef, useState, useEffect } from "react";
import "./firstPage.css";
import MetaData from "../main.js";
import {useParams } from "react-router-dom";
import Footer from "../footer/footer"
import mdata from "../../images/data.json"
import "../header/header.css"
import Header1 from "../header/header1";

const FirstPage = ({ location }) => {
  const { id } = useParams();
  let id_ = id - 15531;
  const [mData, setData] = React.useState(mdata);
  const maind = mData[0][id_];
  const do_main = maind.domain.toUpperCase();
  let list_head1 = `Our ${do_main} service include:`;
  let list_head2 = "Why it is so important for your business?";
  let list_head3 = "Serious affects if you do not have this in your business-";
  if (maind.list1.length == 0) {
    list_head1 = "";
  }
  if (maind.list2.length == 0) {
    list_head2 = "";
  }
  if (maind.list3.length == 0) {
    list_head3 = "";
  }
  let data_url = `/service/request/${id}`;
  let title_d = `${maind.domain} || BIZGLAMO`;
  return (
    <Fragment>
      <MetaData title={title_d} />
      <Header1 data= {do_main}/>
      <section class="facilities" id="faci1">
        <div class="row" id="row1">
          <p className="para1">{maind.para1}</p>
          <p className="para1">{maind.para3}</p>
          <div className="list1">
            <h3 id="parahead">{list_head1}</h3>
            <ul>
              {maind.list1 &&
                maind.list1.map((data) => (
                  <li>{data}</li>
                ))}
            </ul>
          </div>
          <div className="list1">
            <h3 id="parahead">{list_head2}</h3>
            <ul>
              {maind.list2 &&
                maind.list2.map((data) => (
                  <li>{data}</li>
                ))}
            </ul>
          </div>
          <div className="list1">
            <h3 id="parahead">{list_head3}</h3>
            <ul>
              {maind.list3 &&
                maind.list3.map((data) => (
                  <li>{data}</li>
                ))}
            </ul>
          </div>
          <p className="para1">{maind.para2}</p>
        </div>
        <div className="btnn">
          <button><a href={data_url}>Make a Request</a></button>
        </div>
      </section>
      <Footer/>
    </Fragment>
  );
};

export default FirstPage;