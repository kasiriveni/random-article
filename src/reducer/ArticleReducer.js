import {FILTERS_NAME} from '../constants/constants';
const initialState = {
    articleList: []
};

export default function ArticleReducer(state=initialState,action){
    let newState={...state}
    switch(action.type){
        case FILTERS_NAME:
            newState.articleList=action.data;
            return newState;
        default:
            return state;
    }
}