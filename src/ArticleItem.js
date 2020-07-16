import React from 'react'

function ArticleItem(props){
  return (
    <div className={`item ${props.mode === "light" ? "light" : "dark"}`}>
      <strong>{props.title}</strong>
    </div>
  )
}

export default ArticleItem