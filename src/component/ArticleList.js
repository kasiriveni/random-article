import React,{Component} from 'react';

class ArticleList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.list)
        return(
            <div>
                    {this.props.list.map((item)=>{
                        //console.log(item)
                        return (<div key={item.title}>{item.body}</div>)
                    })}
            </div>
        )
    }
}
export default ArticleList