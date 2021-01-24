import {CREATE_POST, FEATCH_POSTS} from './types'
const initialState = {
    posts: [],
    fetchedPosts: []
}
//Pure Functions
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: [...state.posts, action.payload] }
        case FEATCH_POSTS:
            return {...state, fetchedPosts: action.payload} 
        default:
            return state
    }
return state
}