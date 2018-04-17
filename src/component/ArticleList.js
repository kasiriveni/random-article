import React,{Component} from 'react';

class ArticleList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                    {this.props.list.map((item)=>{
                        return (<div  className="listItem" key={item.title}>{item.body}</div>)
                    })}
            </div>
        )
    }
}
export default ArticleList