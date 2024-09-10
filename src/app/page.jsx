"use client"
import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsCards from "./NewsCards";

const newsContext = React.createContext()

export default function Home() {

const [newsArticles, setNewsArticles] = useState([])
const [newsCategory, setNewsCategory] = useState("general")
const [lang, setLang] = useState("en")
const [country, setCountry] = useState("in")
const [fromDate, setFromDate] = useState("")
const [toDate, setToDate] = useState("")

let apikey = 'b9d0cad841a34d0795883ef1c6c22ad5'

// let  apikey = '747326a2f7d984751856a4b8eb2d4269';
// let url = 'https://gnews.io/api/v4/search?q=apple&lang=en&country=us&max=10&apikey=' + apikey;

// React.useEffect(() => {
//   const fetchNews = async () => {
//     try {
//       const response = await axios.get(url);
//       setData(response.data.articles);  
//     } catch (error) {
//       console.error("Error fetching the news: ", error);
//     }
//   };

//   fetchNews();
// }, []);


useEffect(() => {
  fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${newsCategory}&apiKey=b9d0cad841a34d0795883ef1c6c22ad5`)
  .then(res => res.json())
  .then(data => setNewsArticles(data.articles))

}, [newsCategory])



  return (
   <div>

<nav class="navbar navbar-expand-md navbar-light ">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">WorldNews</a>
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

<div className="d-flex justify-center my-2"> <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0a46b329632909.55fc107b86e40.png" width={100} height={50}/> </div>

  
 <div className="">
<div className="">
<div className="flex">{newsArticles.map(item => <NewsCards  title={item.title}  description={item.description} url={item.url} imagesrc={item.urlToImage} />)}</div>
</div>
 </div>
  
    </div>
  );
}
