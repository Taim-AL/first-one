import React, { useState } from 'react';
import {createRoot} from "react-dom/client";
import  "./assets/style/Style.css";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/////////componant
import CollapsibleExample from './componant/Nav2';
import Sec1 from './componant/Sec1';
import Sec2 from './componant/Sec2';
import Card1 from './componant/Card1';
import Card2 from './componant/Card2';
import Foot from './componant/Foot';
///////////images
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import c1 from "./assets/images/c1.jpg";
import c2 from "./assets/images/c2.jpg";
import c3 from "./assets/images/c3.jpg";
import c4 from "./assets/images/c4.jpg";
import Use from './componant/Use';
function App(){
  const imag=[{
    img:c1,
    titel:"Electra werk"
  },
  {
    img:c2,
    titel:"Keukens voorbelden"
  },
  {
    img:c3,
    titel:"Verbouwing"
  },
  {
    img:c4,
    titel:"VERBOUWING HILVERSUM"
  },
]
  const data=[
    {
      img:img1,
      titel:"Aanbouw / Verbouw",
      about:"MGK Bouw BV is gespecialiseerd in het renoveren, aanbouwen en verbouwing van uw woning of bedrijfspand.",
    },
    {
      img:img2,
      titel:"Renovatie / Onderhoud",
      about:"Wij verzorgen complete verbouwingen en renovaties van woningen, appartementen en grachtenpanden. Waarin alle wensen van de klant centraal staan en er met zorg voor detail word gewerkt. ",
    },
    {
      img:img3,
      titel:"Badkamers / Klussen",
      about:"Tevens doen wij het onderhoud aan scholen en bedrijfspanden waarin uw productieproces ongestoord door kan gaan.",
    },
  ]
// const[bla,setBla]=useState("hello homam");
// const[number,setNumber]=useState(5);
// const[color,setColor]=useState("red")
  return(
    <>
    {/* <Use/> */}
    <CollapsibleExample/>
    <div style={{height:"6vw"}}></div>
    <Sec1 />
    <div className='mt-5'><Sec2 /></div>
    <Row className='mx-0' mt="5">
      <Col md="1"></Col>
      <Col md="10">
      <Row className='mx-0'>
          {data.map((e)=>{
            return(
              <>
              <Col md="4">
                <Card1 img={e.img} titel={e.titel} about={e.about}/>
              </Col>
              </>
            )
          })}
        </Row>
        <Row className='mx-0'>
          <Col md="4" mt="5">
          <h4 style={{color:'white',fontFamily:"-moz-initial"}}>Onze projecten</h4>
          <p style={{color:'white',fontStyle:"-moz-initial"}}>Bekijk onze portfolio en meest recente projecten.
Met gebundelde krachten maken wij uw wensen waar!</p>
          </Col>
        </Row>
      </Col>
      <Col md="1"></Col>
    </Row> 
    <Row className='mx-0'>
      {imag.map((e)=>{
        return(
          <>
          <Col md="3">
            <Card2 img={e.img} titel={e.titel}/>
          </Col>
          </>
        )
      })}
    </Row>
    <Foot/>
      {/* <h1 style={{backgroundColor:color}} className="text-center">
        {bla}{number}
      </h1>
      <button className='btn btn-danger' onClick={()=>{
        setBla("hello taim")
      }}>change bla</button>
      <button className='btn btn-danger' onClick={()=>{
          setNumber(number+1)
      }} >change Number</button>
      <button className='btn btn-dark' onClick={()=>{
        setColor("green")
      }}>change color</button> */}
    </>
  )
}
createRoot(document.getElementById("root")).render(<App/>)