"use client"
import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import NewsBoard from "./NewsBoard";

import Navbar from "./Navbar";
import MenuBar from "./MenuBar";


export const newsContext = React.createContext()

const Main = () => {

  const [newsArticles, setNewsArticles] = useState([])
const [newsCategory, setNewsCategory] = useState("general")
const [lang, setLang] = useState("en")
const [country, setCountry] = useState("in")
const [fromDate, setFromDate] = useState("")
const [toDate, setToDate] = useState("")
const [searchKeyword, setSearchKeyword] = useState("")


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

let contextValues = {newsArticles, setNewsArticles, newsCategory, setNewsCategory, lang, setLang, country, setCountry, fromDate, setFromDate, toDate, setToDate, searchKeyword, setSearchKeyword}


  return (
  

  <newsContext.Provider value = {contextValues}>
      <div>
      <Navbar />
      <MenuBar />
      <NewsBoard />
    </div>
  </newsContext.Provider>

     
      
   
  )
}

export default Main
