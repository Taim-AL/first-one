import React, { useState } from 'react';
import SquareIcon from '@mui/icons-material/Square';
export default ({img,titel,about})=>{
    const [data,setData]=useState(about)
    return(
        <>
        <div className='mt-5' style={{backgroundColor:"white",overflow:"hidden"}}>
            <img className='w-100 img-1' style={{cursor:"pointer"}} src={img} alt="" />
            <div style={{display:"flex",paddingLeft:"2vw",marginTop:"3vw"}}>
                <SquareIcon style={{color:"#e00013"}}/>
                <h4 style={{fontFamily:"-moz-initial"}}>{titel}</h4>
            </div>
            <p style={{fontStyle:"italic",padding:"2vw"}}>{data}<p style={{textDecoration:"none",cursor:"pointer",color:"#e00013"}} onClick={()=>{setData(<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officia voluptatem vero consequatur, inventore ratione perspiciatis reiciendis, optio architecto ut eligendi assumenda voluptatum fuga explicabo? Cupiditate excepturi nesciunt dicta adipisci!</>)}}>Lees meer</p></p>
        </div>
        </>
    )
}