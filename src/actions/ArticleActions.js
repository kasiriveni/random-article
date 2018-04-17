import {FILTERS_NAME} from '../constants/constants'

export const GetArticle=(data)=>(dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        dispatch({
            type:'FILTERS_NAME',
            data:json
        })
    
    })

  
}