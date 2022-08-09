import { takeLatest, call, put, all } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}

//*! FLOW OF SAGA CODE
// 1st Whenever we take the latest of categories_action_start, initialized fetchCatAsync saga
// 2nd This saga is gonna attempt to fetch our data from Firebase
// 3rd If successful, gonna put (dispatch) the action with the categories array
// If failed, put the action with the error, meaning we will dispatch an error
// 4th Both of this actions go back into the redux flow and will update the reducer or any other saga listening
