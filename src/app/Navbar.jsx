"use client"
import React from 'react'
import { useContext } from 'react'
import { newsContext } from './Main'



const Navbar = () => {

  const {newsCategory, setNewsCategory} = useContext(newsContext)


  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light ">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#"> <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0a46b329632909.55fc107b86e40.png" width={100} height={50}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class=" navbar-collapse text-black" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <div class="nav-link" onClick={()=> {setNewsCategory("general")}}   >Home</div>
        <div class="nav-link" onClick={()=> {setNewsCategory("health")}} >Health</div>
        <div class="nav-link" onClick={()=> {setNewsCategory("general")}} >World</div>
        <div class="nav-link" onClick={()=> {setNewsCategory("health")}} >Nation</div>
        <div class="nav-link" onClick={()=> {setNewsCategory("business")}} >Business</div>
        <div class="nav-link" onClick={()=> {setNewsCategory("technology")}} >Technology</div>
        <div class="nav-link" onClick={()=> {setNewsCategory("health")}} >Sports</div>
        <div class="nav-link" onClick={()=> {setNewsCategory("health")}} >Entertainment</div>
        <div class="nav-link" onClick={()=> {setNewsCategory("health")}} >Science</div>
        <div class="nav-link" onClick={()=> {setNewsCategory("health")}} >Health</div>
      </div>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
