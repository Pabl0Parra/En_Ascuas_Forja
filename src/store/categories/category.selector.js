//* createSelector does the memoization for us, meaning that if something has already being run, we don´t have to run it again , since we already have that value
import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;
export const selectCategories = createSelector(
  // inputs
  [selectCategoryReducer],
  // outputs. It will only run if categoriesSlice that we get from selectCategoryReducer has changed
  (categoriesSlice) => categoriesSlice.categories
);

//* with the selector, i can transform the reducer business logic into readable data
const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category) => {
    const { title, items } = category; // no need to put .data since category is already the data
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

export default selectCategoriesMap;
