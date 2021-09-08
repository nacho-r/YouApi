import React, { useState } from 'react'

import Videos from '../../Components/Videos'
import setSearch from '../../Hooks/SetSearch'


const error="Lo sentimos. Este vídeo no puede ser reproducido en tu navegador"
const searchs="https://www.youtube.com/embed/"


export default function Search({params}){
    const {search} = params
    const {video, loading}=setSearch({search})
    const [url, setUrl]=useState()


        const handleChange=(url)=>{
            
            let result = searchs.concat(url)
            console.log(result)
            setUrl(result)
        }
   
    if(loading) return <div className='Loading'><div className="Load"></div></div>

    return(<div className='Content'>
        <iframe className="Video" src={url}>{error}</iframe>
        
        {
        

        video.map(({url, id, title, img, channel})=>
            <button key={(id)} onClick={()=>handleChange(url)} >
            
            <Videos 
               
                title={title} 
                url={url} 
                img={img}
                channel={channel}
            />
            </button>
           
        ) } 
        </div>
    )
}