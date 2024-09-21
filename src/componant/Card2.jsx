import React from 'react';
import NearMeIcon from '@mui/icons-material/NearMe';
export default ({img,titel})=>{
    return (
        <>
        <div className='img' style={{overflow:"hidden"}}>
            <img src={img} style={{width:"100%",cursor:"pointer"}} className="img-1" alt="" />
            <h5 className='text-center  text-white' style={{cursor:"pointer"}}><NearMeIcon style={{color:"#e00013"}}/>{titel}</h5>
        </div>
        </>
    )
}