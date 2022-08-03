import React from 'react'
import { useEffect,useState,useRef } from 'react';
function Fetch() {

    const url="https://randomuser.me/api/?results=10";
    const infoData = localStorage.getItem('stdInfo') || [];
    const [data,setData]=useState(JSON.parse(infoData))

    useEffect(() => {
        fetch(url)
            .then((res) => {
                res.json().then((data) => {
                    localStorage.setItem('stdInfo', JSON.stringify(data.results))
                })
            })
    }, []);
    const click =()=>{
        const search=(data.filter((result)=>result.name.first==item));
        setData(search);
    }
    console.log(data);
    return (

        
        <div>
          <input type="text" placeholder='search' id='search' onChange={(e)=>setItem(e.target.value)} />

          <button onclick={click}> submit </button>
          
            {
                (data.length > 0) && data.map((result,index)=>
                (
                    <div key={index}>
                        <img src={result.picture.large} />
                        {result.name.title} 
                        {result.name.first}
                        {result.name.last}<br></br>
                        {result.email}
                    </div>
                )
                )
            }
        </div>
    )
}

export default Fetch