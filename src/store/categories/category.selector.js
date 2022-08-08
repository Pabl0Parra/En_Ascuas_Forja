//* with the selector, i can transform the reducer business logic into readable data

const selectCategories = (state) =>
  state.categories.categories.reduce((acc, category) => {
    const { title, items } = category; // no need to put .data since category is already the data
    acc[title.toLowerCase()] = items;
    return acc;
  }, {}); //

export default selectCategories;
