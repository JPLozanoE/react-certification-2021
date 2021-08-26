import { types } from '../types/types';

export const appReducer = (state = {}, action) => {
  switch (action?.type) {
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
        isDarkTheme: !state.isDarkTheme,
      };

    case types.setRecommendedVideos:
      return {
        ...state,
        videos: action.payload,
      };

    case types.login:
      return {
        ...state,
        auth: {
          isLogged: true,
          displayName: action.payload.displayName,
          uid: action.payload.uid,
        },
      };

    case types.logout:
      return {
        ...state,
        auth: {
          isLogged: false,
          displayName: '',
          uid: null,
        },
      };

    case types.addFavoriteVideo:
      return {
        ...state,
        favoriteVideos: [
          ...state.favoriteVideos,
          { ...action.payload, isFavorite: true },
        ],
      };

    case types.deleteFavoriteVideo:
      return {
        ...state,
        videos: state.videos.map((video) =>
          video.id.videoId === action.payload ? { ...video, isFavorite: false } : video
        ),
        favoriteVideos: state.favoriteVideos.filter(
          (favoriteVideo) => favoriteVideo.id.videoId !== action.payload
        ),
      };

    case types.updateRecommendedVideos:
      return {
        ...state,
        videos: state.videos.map((video) =>
          video.id.videoId === action.payload ? { ...video, isFavorite: true } : video
        ),
      };

    default:
      return state;
  }
};
