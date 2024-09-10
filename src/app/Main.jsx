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
const [country, setCountry] = useState("us")
const [fromDate, setFromDate] = useState("")
const [toDate, setToDate] = useState("")
const [searchKeyword, setSearchKeyword] = useState("")
const [search, setSearch] = useState("")











useEffect(() => {
  fetch(`https://gnews.io/api/v4/top-headlines?category=${newsCategory}&q=${search}&lang=${lang}&country=${country}&from=${fromDate}&to=${toDate}&max=60&apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
  .then(res => res.json())
  .then(data => setNewsArticles(data.articles))

}, [newsCategory, lang, country, fromDate, toDate, search])

let contextValues = {newsArticles, setNewsArticles, newsCategory, setNewsCategory, lang, setLang, country, setCountry, fromDate, setFromDate, toDate, setToDate, searchKeyword, setSearchKeyword, search, setSearch}


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
