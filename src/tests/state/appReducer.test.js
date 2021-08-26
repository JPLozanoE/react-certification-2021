import { appReducer } from '../../state/appReducer';
import { demoState, singleVideo } from '../fixtures/demoState';
import { types } from '../../types/types';

describe('Testing appReducer', () => {
  test('it should return the default State', () => {
    const state = appReducer();
    expect(state).toEqual({});
  });

  test('it should return the default State', () => {
    const state = appReducer(demoState);
    expect(state).toEqual(demoState);
  });

  test('Query change', () => {
    const action = {
      type: types.changeSearchQuery,
      payload: 'Testing',
    };
    const state = appReducer(demoState, action);
    expect(state.search).toEqual('Testing');
  });

  test('Video selection', () => {
    const action = {
      type: types.setSelectedVideo,
      payload: singleVideo,
    };
    const state = appReducer(demoState, action);
    expect(state.selectedVideo).toEqual(singleVideo);
  });

  test('Theme toggle', () => {
    const action = {
      type: types.toggleTheme,
    };
    const state = appReducer(demoState, action);
    expect(state.isDarkTheme).toBe(false);
  });

  test('Recommended Videos', () => {
    const action = {
      type: types.setRecommendedVideos,
      payload: singleVideo,
    };
    const state = appReducer(demoState, action);
    expect(state.videos).toEqual(singleVideo);
  });

  test('Login', () => {
    const authState = {
      displayName: 'Pablo Lozano',
      uid: 'aaa123qwert',
    };

    const expectedState = {
      isLogged: true,
      displayName: 'Pablo Lozano',
      uid: 'aaa123qwert',
    };
    const action = {
      type: types.login,
      payload: authState,
    };
    const state = appReducer(demoState, action);
    expect(state.auth).toEqual(expectedState);
  });

  test('Logout', () => {
    const expectedState = {
      isLogged: false,
      displayName: '',
      uid: null,
    };
    const action = {
      type: types.logout,
    };
    const state = appReducer(demoState, action);
    expect(state.auth).toEqual(expectedState);
  });

  test('Add favorite video', () => {
    const action = {
      type: types.addFavoriteVideo,
      payload: singleVideo,
    };
    const expectedState = [
      ...demoState.favoriteVideos,
      { ...singleVideo, isFavorite: true },
    ];
    const state = appReducer(demoState, action);
    expect(state.favoriteVideos).toEqual(expectedState);
  });

  test('Delete favorite video', () => {
    const action = {
      type: types.deleteFavoriteVideo,
      payload: demoState.favoriteVideos[0].id.videoId,
    };
    const expectedState = demoState.favoriteVideos.filter(
      (favoriteVideo) => favoriteVideo.id.videoId !== action.payload
    );
    const state = appReducer(demoState, action);
    expect(state.favoriteVideos).toEqual(expectedState);
  });

  test('Update recommended videos', () => {
    const action = {
      type: types.updateRecommendedVideos,
      payload: demoState.videos[0].id.videoId,
    };
    const expectedState = demoState.videos.map((video) =>
      video.id.videoId === action.payload ? { ...video, isFavorite: true } : video
    );
    const state = appReducer(demoState, action);
    expect(state.videos).toEqual(expectedState);
  });
});
