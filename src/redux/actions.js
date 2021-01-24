import {
  CREATE_POST,
  SHOW_ALERT,
  HIDE_LOADER,
  SHOW_LOADER,
  HIDE_ALERT,
  REQUEST_POSTS,
} from "./types"

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  }
}

export function show_loader() {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  }



  // return async (dispatch) => {
  //   try {
  //     dispatch(show_loader())
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts? limit=5"
  //     )
  //     const json = await response.json()
  //     setTimeout(() => {
  //       dispatch({ type: FEATCH_POSTS, payload: json })
  //     }, 500)
  //     dispatch(hideLoader())
  //   } catch (e) {
  //     dispatch(showAlert("Щось пішло не так"))
  //     dispatch(hideLoader())
  //   }
  // }
}
