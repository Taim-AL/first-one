import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
export default()=>{
    const [data,setData]=useState(true)
    const [search,setSearch]=useState(true)
    return(
        <>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <button className='btn btn-danger'onClick={()=>{
                setData(true)
            }}>Html</button>
            <button className='btn btn-danger' onClick={()=>{
                setData(false)
            }}>Css</button>
            <div style={{display:"flex"}}>
                <button className='btn btn-danger' onClick={()=>{
                    setSearch(!search)
                }}>
                    <SearchIcon/>
                    
                </button>
                {
                        search===true?"":
                        <>
                        <input type="text" placeholder='search' className='input' />
                        </>
                    }
            </div>
        </div>
        
            {
                data === true ?
                <>
                <div className='card'>
                <h1 className=' text-center'>
                html
            </h1>
            <p className='card-body'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos expedita accusantium fugiat itaque aliquid quod tenetur magnam? Aliquid sunt saepe mollitia? Similique quidem recusandae sequi explicabo ea ducimus aliquid aperiam?
            </p>
        </div>
                </>:
                <div className='card'>
                <h1 className=' text-center'>
                    Css
            </h1>
            <p className='card-body'>
                Lorem,dddddddddddddddd ipsum dolor sit amet consectetur adipisicing elit. Eos expedita accusantium fugiat itaque aliquid quod tenetur magnam? Aliquid sunt saepe mollitia? Similique quidem recusandae sequi explicabo ea ducimus aliquid aperiam?
            </p>
        </div>
            }
            
        </>
    )
}