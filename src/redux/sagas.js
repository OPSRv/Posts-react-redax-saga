import { takeEvery, put, call } from "redux-saga/effects"
import { hideLoader, show_loader, showAlert } from "./actions"
import { REQUEST_POSTS, FEATCH_POSTS } from "./types"

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(show_loader())
    const payload = yield call(fetchPosts)
    yield put({ type: FEATCH_POSTS, payload })
    yield put(hideLoader())
  } catch (e) {
    yield put(showAlert("Щось пішло не так"))
    yield put(hideLoader())
  }
}

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  )
  return await response.json()
}
