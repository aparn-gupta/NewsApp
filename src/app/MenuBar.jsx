import React, { useContext } from 'react'
import { newsContext } from './Main'


const MenuBar = () => {

const {newsArticles, setNewsArticles, newsCategory, setNewsCategory, lang, setLang, country, setCountry, fromDate, setFromDate, toDate, setToDate, searchKeyword, setSearchKeyword} = useContext(newsContext)

const handleCountryChange = (e) => {
    setCountry(e.target.value)

}

const handleLangChange = (e) => {
    setLang(e.target.value)
}





const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${searchKeyword}&apiKey=b9d0cad841a34d0795883ef1c6c22ad5`)
  .then(res => res.json())
  .then(data => setNewsArticles(data.articles))
 

}

const handleInputChange = (e) => {
  setSearchKeyword(e.target.value)
  
}




  return (
    <div className=' container'>

   <form onSubmit={handleSubmit} className='me-4 mb-5 mt-4'  >
   <input className='border border-1 me-4 py-3 ps-2' style={{width: "320px"}} type='text' name= "newsKeyword" value={searchKeyword} onChange={handleInputChange} placeholder='Search Acowale News'/>
   <button  type="submit" className="btn btn-danger mt-2 mt-lg-0">Search</button>
   </form>
   <div className=' me-2 fw-bold'>  Select Publication Date</div>
   <div className='d-lg-flex'>
   <div className='d-flex mt-3'>
   
   
   <label htmlFor='dateFrom' className='me-3 fw-bold' > From:</label>
   <input className='border border-1 me-4 p-2 transparent' type='date' onChange={(e) => {setFromDate(e.target.value + "T00:00:00Z")}} id= "dateFrom" />
   </div>
   <div className='d-flex mt-3'>
   <label htmlFor='dateTo'className='me-3 fw-bold' >To:</label>
   <input className='border border-1 me-4 p-2 transparent ms-3 ms-lg-0' type='date' onChange={(e) => {setToDate(e.target.value + "T00:00:00Z")}} id="dateTo" />
   </div>


    <select className='border border-1 me-4 p-2 transparent mt-3'>
    <option  > Select Country</option>
  <option value="br" onChange={handleCountryChange}>Brazil</option>
  <option value="ca" onChange={handleCountryChange}>Canada</option>
  <option value="cn" onChange={handleCountryChange}>China</option>
  <option value="eg" onChange={handleCountryChange}>Egypt</option>
  <option value="fr" onChange={handleCountryChange}>France</option>
  <option value="de" onChange={handleCountryChange}>Germany</option>
  <option value="gr" onChange={handleCountryChange}>Greece</option>
  <option value="hk" onChange={handleCountryChange}>Hong Kong</option>
  <option value="in" onChange={handleCountryChange}>India</option>
  <option value="ie" onChange={handleCountryChange}>Ireland</option>
  <option value="il" onChange={handleCountryChange}>Israel</option>
  <option value="it" onChange={handleCountryChange}>Italy</option>
  <option value="jp" onChange={handleCountryChange}>Japan</option>
  <option value="nl" onChange={handleCountryChange}>Netherlands</option>
  <option value="no" onChange={handleCountryChange}>Norway</option>
  <option value="pk" onChange={handleCountryChange}>Pakistan</option>
  <option value="pe" onChange={handleCountryChange}>Peru</option>
  <option value="ph" onChange={handleCountryChange}>Philippines</option>
  <option value="pt" onChange={handleCountryChange}>Portugal</option>
  <option value="ro" onChange={handleCountryChange}>Romania</option>
  <option value="ru" onChange={handleCountryChange}>Russian Federation</option>
  <option value="sg" onChange={handleCountryChange}>Singapore</option>
  <option value="es" onChange={handleCountryChange}>Spain</option>
  <option value="se" onChange={handleCountryChange}>Sweden</option>
  <option value="ch" onChange={handleCountryChange}>Switzerland</option>
  <option value="tw" onChange={handleCountryChange}>Taiwan</option>
  <option value="ua" onChange={handleCountryChange}>Ukraine</option>
  <option value="gb" onChange={handleCountryChange}>United Kingdom</option>
  <option value="us" onChange={handleCountryChange}>United States</option>
</select>

        
<select  className='border border-1 me-4 p-2 transparent mt-3'>
<option  > Select Language</option>
  <option value="ar" onChange={handleLangChange}>Arabic</option>
  <option value="zh" onChange={handleLangChange}>Chinese</option>
  <option value="nl" onChange={handleLangChange}>Dutch</option>
  <option value="en" onChange={handleLangChange}>English</option>
  <option value="fr" onChange={handleLangChange}>French</option>
  <option value="de" onChange={handleLangChange}>German</option>
  <option value="el" onChange={handleLangChange}>Greek</option>
  <option value="he" onChange={handleLangChange}>Hebrew</option>
  <option value="hi" onChange={handleLangChange}>Hindi</option>
  <option value="it" onChange={handleLangChange}>Italian</option>
  <option value="ja" onChange={handleLangChange}>Japanese</option>
  <option value="ml" onChange={handleLangChange}>Malayalam</option>
  <option value="mr" onChange={handleLangChange}>Marathi</option>
  <option value="no" onChange={handleLangChange}>Norwegian</option>
  <option value="pt" onChange={handleLangChange}>Portuguese</option>
  <option value="ro" onChange={handleLangChange}>Romanian</option>
  <option value="ru" onChange={handleLangChange}>Russian</option>
  <option value="es" onChange={handleLangChange}>Spanish</option>
  <option value="sv" onChange={handleLangChange}>Swedish</option>
  <option value="ta" onChange={handleLangChange}>Tamil</option>
  <option value="te" onChange={handleLangChange}>Telugu</option>
  <option value="uk" onChange={handleLangChange}>Ukrainian</option>
</select>

      
   </div>
    </div>
  )
}

export default MenuBar
