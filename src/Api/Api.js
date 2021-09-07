const key='AIzaSyBHHA0vyZQL4SW5lGERThrNoNThR_x1Azw'



export default function Api({search = ''}={}){
    const apiURL= `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&type=video&q=${search}&maxResults=12`
    
    return(
    
    fetch(apiURL)
    .then(res=>res.json())
    .then(response=>{
        const data=response.items

        const videos= data.map(video=> {
            const img = video.snippet.thumbnails.medium.url
            const channel = video.snippet.channelTitle
            const title=video.snippet.title
            const url=video.id.videoId
            const id=video.etag
        return {url, title, id, img, channel}
        })
      return videos
    })  )
}