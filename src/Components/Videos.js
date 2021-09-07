import React from 'react'




export default function Video({title, img, channel}){
    
    return(
        <div className="Video-content">  
           
            <div>
                <img src={img}/>
                <h4 className="Title">{title}</h4>
                <div>
                    <h4>{channel}</h4>
                </div>
            </div>

            
        </div>
    )
}