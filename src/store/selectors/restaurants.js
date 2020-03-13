import { createSelector } from 'reselect'

export const restaurantsSelector = state => state.restaurants;

export const restaurantsListSelector = createSelector(restaurantsSelector, state => state.list);
export const restaurantsLoadingSelector = createSelector(restaurantsSelector, state => state.loading);
export const restaurantsErrorSelector = state => createSelector(restaurantsSelector, state => state.error);