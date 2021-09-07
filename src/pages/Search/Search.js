import React, { useState } from 'react'

import Videos from '../../Components/Videos'
import setSearch from '../../Hooks/SetSearch'


const error="Lo sentimos. Este vídeo no puede ser reproducido en tu navegador"
const searchs="https://www.youtube.com/embed/"


export default function Search({params}){
    const {search} = params
    const {video, loading}=setSearch({search})
    const [url, setUrl]=useState()


        const handleChange=(e)=>{
            let resul=e.target.name
            console.log(resul.toString())
            let result = searchs.concat(resul)
            console.log(result)
            setUrl(result)
        }
   
    if(loading) return <div className='Loading'><div className="Load"></div></div>

    return(<div className='Content'>
        <iframe className="Video" src={url}>{error}</iframe>
        
        {
        

        video.map((videos)=>
            <button name={(videos.url)} onClick={handleChange} >
            
            <Videos 
                key={videos.id} 
                title={videos.title} 
                url={videos.url} 
                img={videos.img}
                channel={videos.channel}
            />
            </button>
           
        ) } 
        </div>
    )
}