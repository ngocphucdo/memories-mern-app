import axios from 'axios';

const url = 'http://localhost:5000/posts';

const fetchPosts = () => axios.get(url);
const createPost = (newPost) => axios.post(url, newPost);
const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
const deletePost = (id) => axios.delete(`${url}/${id}`);
const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

const API = {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
};

export default API;
