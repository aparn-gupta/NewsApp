import React from 'react'

const NewsCards = ({title, description, imagesrc, url}) => {
  return (
    <div className='my-3 mx-2'>
          <div className="card d-inline-block bg-dark bg-gradient text-light p-2 " style= {{width: "350px", height: "500px"}}>
  <img src= {imagesrc} className="card-img-top" alt="..."  style={{width: "100%", height: "200px"}} />
  <div className="card-body" width= "300px" height = "300px" >

    <h5 className="card-title" style={{height: "60px"}} > {title.slice(0, 45)}</h5>
    <div  className="card-text" style={{height: "150px"}}>{ description ?  description.slice(0,200): ""} </div>
    <a href= {url} className="btn btn-primary"> Read More</a>
  </div>
</div>
      
    </div>
  )
}

export default NewsCards
