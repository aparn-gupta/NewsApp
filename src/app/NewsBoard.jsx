import React, {useContext} from 'react'
import NewsCards from "./NewsCards";




const NewsBoard = ({newsArticles}) => {

    
  


  return (
    <div>

  
<div className="">
<div className="">
<div className="flex">{newsArticles.map(item => <NewsCards  title={item.title}  description={item.description} url={item.url} imagesrc={item.urlToImage} />)}</div>
</div>
</div>
      
    </div>
  )
}

export default NewsBoard
