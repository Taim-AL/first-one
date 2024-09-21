import React from 'react';
////////////Icon
import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default ()=>{
    return(
        <>
        <Row  className='foo shadow mt-5 mx-0'>
            <Col mt="3" md="5">
                <ul className='ul-foot'>
                <li className='li-foot'>Privacy & Security</li>
                <li className='li-foot'>Terms of Use</li>
                <li className='li-foot'>Trademarks</li>
                <li className='li-foot'>Legal</li>
                <li className='li-foot'>Genuine Tools</li>
            </ul>
            <p className='p-foot'>Copyright © 2000-2023 JetBrains s.r.o.</p>
            </Col>
            <Col mt="3" md="4">
                <div className='row mx-0 text-white mt-4'>
                <div className='col-4 mm' style={{margin:"auto"}}>
                    <h6 >Join Us</h6>
                    <p>Careerd</p>
                    <p>Restaurants</p>
                    <p>Become a Courier</p>
                    <p>About</p>
                </div>
                <div className='col-4 mm'>
                    <h6>Let Us Help You</h6>
                    <p>Help Center</p>
                    <p>Support</p>
                    <p>Contacte</p>
                </div>
                <div className='col-4 mm'>
                    <h6>Follow Us</h6>
                    <p className='f'><FacebookOutlined/></p>
                    <p className='t'><Twitter/> </p>
                    <p className='i'><Instagram/></p>
                </div>
            </div>
            </Col>
            <Col mt="3" md="3" className='foo-ri'>
                <ArrowBackIosNewIcon className='love'/>
           <FavoriteIcon className='love'/>
           <p className='love mt-2'>/</p>
           <ArrowForwardIosIcon className='love'/>
            </Col>
        </Row>
        </>
    )
}