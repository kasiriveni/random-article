import {FILTERS_NAME,POST_URL} from '../constants/constants'

export const GetArticle=(data)=>(dispatch)=>{
    fetch(POST_URL)
    .then(response => response.json())
    .then(json => {
        dispatch({
            type:'FILTERS_NAME',
            data:json
        })
    
    })

  
}