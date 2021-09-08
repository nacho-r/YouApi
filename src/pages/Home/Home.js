import SetSearch from '../../Hooks/SetSearch'
import { useState } from 'react'
import {useLocation} from 'wouter'
import Video from '../../Components/Videos'

export default function Home(){
    const [search, setSearch] = useState('')
    const [path, push] = useLocation()
    const {video, loading}=SetSearch()

    
    const handleSubmit = evt =>{
        evt.preventDefault()
        push(`/youapi/${search}`)
      }
    
      const handleChange=evt=>{
        setSearch(evt.target.value)
      }



    if(loading) return <div className='Loading'><div className="Load"></div></div>

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}> 
                <input onChange={handleChange} type='text'  placeholder="BUSCAR.." value={search}></input>
                <input type='submit' value='Buscar' />
            </form>
        
            <h3 className='last-text'>Ultima Busqueda!</h3>

            <div className='Content'>
                {video.map((videos)=>
                    <Video 
                        key={videos.id } 
                        title={videos.title} 
                        url={videos.url} 
                        img={videos.img}
                        channel={videos.channel}
                    />
                ) } 
            </div>
        </div>
    )
}