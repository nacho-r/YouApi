import React from 'react'




export default function Video({title, img, channel}){
    
    return (
      <div className="Video-content">
        <div>
          <img src={img} />
          <div className="Title-Channel">
            <h4 className="Title">{title}</h4>

            <h4 className="Channel">{channel}</h4>
          </div>
        </div>
      </div>
    );
}