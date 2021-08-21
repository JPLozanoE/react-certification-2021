import { types } from '../types/types';

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case types.changeSearchQuery:
      return {
        ...state,
        search: action.payload,
      };

    case types.setSelectedVideo:
      return {
        ...state,
        selectedVideo: action.payload,
      };

    case types.toggleTheme:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };

    default:
      break;
  }
};
