
import React, {Component, PropTypes} from 'react';
import Article from './Article.jsx';

class News extends React.Component {
    render(){
        var listArticles = this.props.news.map((elem, i) => {
            return (
                <Article key={i} article={elem} />
            );
        });
        return(
            <div>
                {listArticles}
            </div>
        )
    }
}

export default News;