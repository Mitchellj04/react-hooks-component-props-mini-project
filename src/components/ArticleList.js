import React from 'react'
import Article from './Article'

function ArticleList({articles}){
    const ArticleItem = articles.map((article) => {
        return(
        <main>
            <Article key={article.id} title ={article.title} date={article.date} preview={article.preview}/>  
        </main>
  
        )
    })

  return (
    <div>
        {ArticleItem}
    </div>
  )
}

export default ArticleList