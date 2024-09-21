import { Rating } from '@mui/material';
import React from 'react';
import bac from "../assets/images/sec1.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default ()=>{
    return(
        <>
        <Row className='mx-0'>
            <Col md="7">
                <Row className='mx-0'>
                    <Col md="1"></Col>
                    <Col md="11">
                    <img src={bac} className="" style={{width:"100%", height:"40vw",cursor:"pointer"}} alt="" />
                    </Col>
                </Row>
            </Col>
            <Col md="4">
            <div className='row mx-0' style={{backgroundColor:"#bbbbbb",height:"22%"}}>
                    <div className='col-1' style={{display:"flex",justifyContent:"right",alignItems:"center"}}>
                        <div style={{height:"80%",width:"30%",backgroundColor:"#e00013"}}></div>
                    </div>
                    <div className='col-11'>
                        <h4 className='text-white mt-3' style={{fontFamily:"-moz-initial"}}>Contact</h4>
                        <h6 className='text-white mt-3' style={{fontFamily:"-moz-initial"}}>Bel ons</h6>
                        <h6 className='text-white mt-3' style={{fontFamily:"-moz-initial"}}>06 - 1306 7563</h6>
                    </div>
                </div>
                <div className=' p-3 mt-3 text-break' style={{backgroundColor:"#d3d3d3",height:"75%"}}>
                <h4 className=' mt-3' style={{fontFamily:"-moz-initial"}}>Contact</h4>
                <div className='mt-3 p-1' style={{fontStyle:"italic"}}>
                    <h6 >Sjoerd Logcher12</h6>
                    <h6 >juli 2021</h6>
                    <p className='px-3 mt-3 shadow text-break' style={{border:"1px solid black",borderRadius:"5px"}}>Voor de tweede keer gebruik mogen maken van de diensten van MGK-bouw. Eerste keer de buitenbekleding van een uitbouw, de tweede keer een complete renovatie. MGK is uiterst betrouwbaar. Ze werken zeer netjes, snel en nauwkeurig. Zelfs de nieuwe buren waren vol lof over de nette en vriendelijke medewerkers van dit bedrijf. Een absolute aanrader.</p>
                    <Rating name="size-large" defaultValue={2} size="large" />
                </div>
                </div>
            </Col>
            <Col md="1"></Col>
        </Row>
        </>
    )
}