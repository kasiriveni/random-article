import React,{Component} from 'react';
import { connect } from "react-redux";

import ArticleList from './ArticleList';
import {GetArticle} from '../actions/ArticleActions';

class Articles extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        this.props.GetArticle()
    }
    render(){
        
        const articleList  = this.props.Article.articleList;
        console.log(this.props)
        return(
            <div>
                    <ArticleList list={articleList}/>
            </div>
        )
    }
}
const getArticle = (state) => {
    return state;
};

export default connect(getArticle,{GetArticle})(Articles)