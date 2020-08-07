import categories from '../data';

const INITIAL_STATE = {
  selectedCategory: categories[0],
  selectedMovie: categories[0].movies[0],
  categories: [...categories]
}

function movieReducer(state = INITIAL_STATE, action) {
  if(action.type === 'SELECT_MOVIE') {
    return {
      ...state,
      selectedCategory: action.category,
      selectedMovie: action.movie
    }
  }
  return state
}

export default movieReducer;