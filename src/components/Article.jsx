import React from 'react';

class Article extends React.Component {
    constructor(){
        super()
    }
    
    render(){
        var article = this.props.article;
        return (

            <div>
                <h1>
                    {article.author}
                </h1>
                <h3>{article.title}</h3>
                <div>
                    {article.description}
                </div>
            </ div>
        );
    }

}

Article.propTypes = {
    article: React.PropTypes.shape({
        author: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired
    })
};

export default Article;