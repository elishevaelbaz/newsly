import React from 'react'

class ArticleItem extends React.Component{
  // const {}

  state = {
    details: "closed"
  }

  handleItemClick = (e) => {
    if (this.state.details === "closed"){
      this.setState({details: "open"})
      // e.target.textContent = "Switch to Card View"
    }
    else{
      this.setState({details: "closed"})
      // e.target.textContent = "Switch to List View"


    }
  }

  render(){
    return (
      this.state.details === "closed" ?
      (<div onClick={this.handleItemClick} className={`item ${this.props.mode === "light" ? "light" : "dark"}`}>
        <strong>{this.props.title}</strong>
      </div>)
      :  
      (<div onClick={this.handleItemClick} className={`card ${this.props.mode === "light" ? "light" : "dark"}`}>
      <h4>{this.props.title}</h4>
      <div className="image-wrapper">
        <img className="image" src={this.props.urlToImage}/>
      </div>
      <p>{this.props.description}</p>
    <a href={this.props.url} target="_blank">Click for full article...</a>
    </div>)
    )
  }
}

export default ArticleItem



// import React from 'react'

// function ArticleItem(props){
//   return (
//     <div className={`item ${props.mode === "light" ? "light" : "dark"}`}>
//       <strong>{props.title}</strong>
//     </div>
//   )
// }

// export default ArticleItem