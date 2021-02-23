import API from '../api';
import { ACTION_TYPES } from '../constants/actionTypes';
// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await API.fetchPosts();

    dispatch({ type: ACTION_TYPES.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await API.createPost(post);

    dispatch({ type: ACTION_TYPES.CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await API.updatePost(id, post);

    dispatch({ type: ACTION_TYPES.UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await API.deletePost(id);

    dispatch({ type: ACTION_TYPES.DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await API.likePost(id);

    dispatch({ type: ACTION_TYPES.LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
