import React, { Fragment, useEffect } from "react";
import "./home.css";
import MetaData from "../main.js";
import Footer from "../footer/footer"
import Header1 from "../header/header1";
import pic1 from "../../images/image.jpg"
import { useSelector, useDispatch } from "react-redux";
import { getAllBlog } from "../../actions/dataAction";

const Blog = ({ location }) => {
  const d = "BLOG!";
  const dispatch = useDispatch();
  const Blogs = useSelector((state) => state.Blogs.BlogAll)
  
  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch, getAllBlog]);
  return (
    <Fragment>
      <MetaData title="Blog! BIZGLAMO" />
      <Header1 data={d} />
      <section class="facilities" id="faci7">
        <div class="row" id="row7">
          
          {Blogs && Blogs.map((Blog) => (
            <div className="bcont">
            <div className="bcont1">
              <div className="bcont11">
                <img src={pic1} alt="" />
              </div>
              <div className="bcont12">
                <h2>{Blog.name}</h2>
                <p>{Blog.date}</p>
              </div>
            </div>
            <div className="bcont2">
              <p>{Blog.msg}</p>
            </div>
          </div>
          ))}
        </div >
      </section >
  <Footer />
    </Fragment >
  );
};

export default Blog;