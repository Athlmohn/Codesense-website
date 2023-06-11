import React, { useState, useEffect } from 'react';
import './Gallery.css'
function Gallery() {

    const [images, setimages] = useState([]);

    useEffect(() => {
        
      const fetchImages =()=>{
        
        const data =[


            {
                id:1,
                url:'https://picsum.photos/id/66/300/200',
                title:'Image 1'
            },
            {
                id:2,
                url:'https://picsum.photos/id/71/300/200',
                title:'Image 2'
            },
            {
                id:3,
                url:'https://picsum.photos/id/74/300/200',
                title:'Image 3'
            },
            {
                id:4,
                url:'https://picsum.photos/id/103/300/200',
                title:'Image 4'
            },
            {
                id:5,
                url:'https://picsum.photos/id/13/300/200',
                title:'Image 5'
            },
        ]
        setimages(data)
      }
       fetchImages()
      }, [])
    

   const handleDelteImage =(imageId)=>{
    setimages(images.filter((image)=>image.id !== imageId))
   }





  return (
    <div>
 <div className="title"><h1>ImageGallery App</h1></div>
{
    images.length > 0 ?
    (
      
        <div className="image-grid">
    {
    images.map((data)=>(

<div className="image-card" key={data.id}>
    <img src={data.url} alt="" />
<div className="image-details">
    <h3>{data.title}</h3>
    <button onClick={()=>handleDelteImage(data.id)}>Delete</button>
</div>
</div>

    ))


    }

 </div>

    ) : 
    <p className='no-images'>No Images Found</p>
}
 

    </div>
  )
}

export default Gallery