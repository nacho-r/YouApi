import { useEffect, useState } from "react"
import Api from '../Api/Api'


export default function SetSearch({search}= {search:''}){
    const [video, setVideo]=useState([])
    const [loading, setLoading] = useState(false)


    const searchTo=search || localStorage.getItem('last') || 'software enginner'

    useEffect(function(){
        setLoading(true)
        
        Api({ search: searchTo }).then((result) => {
          setVideo(result);
          setLoading(false);
          localStorage.setItem("last", search);
        });
    
      }, [search])


    return{video, loading}
}