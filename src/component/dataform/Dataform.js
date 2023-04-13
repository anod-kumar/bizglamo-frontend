import React, { Fragment, useRef, useState, useEffect } from "react";
import MetaData from "../main.js";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { clearErrors, addDetails } from "../../actions/dataAction";
import { useDispatch, useSelector } from "react-redux";
import mdata from "../../images/data.json"
import "./dataform.css";
import { DETAILS_RESET } from "../../constant/dataConstant.js";
import Header1 from "../header/header1.js";
import Footer from "../footer/footer"

const DataForm = (data) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let id_ = id - 15531;
    const [mData, setData] = React.useState(mdata);
    const maind = mData[0][id_];
    const do_main = maind.domain.toUpperCase();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [msg, setMsg] = useState("");
    const { error, success } = useSelector((state) => state.newDataDetails);
    console.log(error, success)
    const senddata = (e) => {
        e.preventDefault();
        const sdata = {
            "name": name,
            "email": email,
            "country": country,
            "domain": maind.domain,
            "query": msg
        }
        console.log(sdata);
        dispatch(addDetails(sdata));

    };
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (success) {
            navigate("/send_success");
            dispatch({ type: DETAILS_RESET });
        }
    }, [dispatch, error, success, alert]);
    return (
        <Fragment>
            <MetaData title="Make a Request || BIZGLAMO" />
            <Header1 data={do_main} />

            <section class="facilities" id="faci2">
                <div class="row" id="row2">
                    <h2 id="head1">Send Your Request</h2>
                    <div class="container1">
                        <form class="contain1" onSubmit={senddata}>
                            <input type="text" name="Name" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} value={name} required />
                            <input type="text" name="Email" id="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            <input type="text" name="Subject" id="subject" placeholder="Your Country" onChange={(e) => setCountry(e.target.value)} value={country} required />
                            <textarea name="Text" id="text" cols="30" rows="10" placeholder="Your Inquiry" onChange={(e) => setMsg(e.target.value)} value={msg} required ></textarea>
                            <input class="form__button1 button_1" id="btn3" type="submit" value="SEND" />
                        </form>
                        <div class="contain2">
                            <h6 id="coninfo">CONTACT INFO</h6>
                            
                            <h5>Email Us At</h5>
                            <p>bizglamo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </Fragment>

        // 
    );
};

export default DataForm;