import React from 'react';
import "./home.css";

const Card = ({ data }) => {
  let daa = "Lorem ipsum jtjhtdtycy consec teturggfh elit.Ipsam odit, voluptatum cupiditatfhde soluta velit dictagudjvyfsh"
  let x = daa.slice(0, 105);
  if (data.para1 != undefined) {
    x = data.para1.slice(0, 95);
  }
  var url = "service/" + data.id;
  let data_url = `/service/request/${data.id}`;
  return (
    <>
      <div class="facilities-col">
        <img src={data.image} alt={data.domain} />
        <div className='faci_col'>
          <h2>{data.domain}</h2>
          <p>{x}.... <span><a href={url}>Show More</a></span></p>
          <button className='btnn1'><a href={data_url}>Easy Request</a></button>
        </div>
      </div>
    </>
  )
}

export default Card;