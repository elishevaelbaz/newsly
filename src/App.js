import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
    view: "card",
    mode: "light"
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      if (this.state.view === "card"){
      return <ArticleCard 
              key={article.id} 
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              mode={this.state.mode}
              />
      }
      else{
        return <ArticleItem title={article.title} mode={this.state.mode} />
      }
            })
  }

  handleViewClick = (e) => {
    if (this.state.view === "card"){
      this.setState({view: "list"})
      e.target.textContent = "Switch to Card View"
    }
    else{
      this.setState({view: "card"})
      e.target.textContent = "Switch to List View"


    }
  }

  handleDarkMode = (e) => {
    if (this.state.mode === "light"){
      this.setState({mode: "dark"})
      e.target.textContent = "Switch to Light Mode"
    }
    else{
      this.setState({mode: "light"})
      e.target.textContent = "Switch to Dark Mode"


    }
  }

  render(){
    return (
      <div className={this.state.mode === "light" ? "light" : "dark"}>
        <button onClick={this.handleDarkMode}>Switch to Dark Mode</button>
        <button onClick={this.handleViewClick}>Switch to List View</button>
        <div className={this.state.view === "card" ? "cards" : "list"}>
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default App;
