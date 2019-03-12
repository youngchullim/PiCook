import * as RecipeAPIs from '../util/recipe_api_util';
// import { debug } from 'util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const START_LOADING_ALL_RECIPES = "START_LOADING_ALL_RECIPES";
export const START_LOADING_RECIPE = "START_LOADING_RECIPE";
// export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";

export const receiveRecipes = payload => ({
  type: RECEIVE_RECIPES,
  payload
});

export const receiveRecipe = payload => ({
  type: RECEIVE_RECIPE,
  payload: payload.meals[0]
})

export const startLoadingAllRecipes = () => ({
  type: START_LOADING_ALL_RECIPES
});

export const startLoadingRecipe = () => ({
  type: START_LOADING_RECIPE
});

// export const receiveRecipeErrors = errors => ({
//   type: RECEIVE_RECIPE_ERRORS,
//   errors
// })

// export const receivePuppyRecipes = puppyRecipes => ({
//   type: RECEIVE_PUPPY_RECIPES,
//   puppyRecipes
// })

export const getRecipesByDishName = food => dispatch => {
  return RecipeAPIs.fetchRecipesByDishName(food)
    .then(res => {
      return dispatch(receiveRecipes(res.data))
    })
}

export const getRecipeById = id => dispatch => (
  RecipeAPIs.fetchRecipeById(id)
    .then(res => {
      // debugger
      dispatch(receiveRecipe(res.data))
    }
    )
)

export const getRecipesByIngredient = food => dispatch => (
  RecipeAPIs.fetchRecipesByIngredient(food)
    .then(res => (dispatch(receiveRecipes(res)))
  )
)

export const getRecipesByCat = food => dispatch => (
  RecipeAPIs.fetchRecipesByCat(food)
    .then(res => (dispatch(receiveRecipes(res)))
  )
)



