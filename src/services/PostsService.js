import api from './api';

export default {
  fetchPosts() {
    return api().get('/movie/usersList');
  },
  newPosts(params) {
    return api().post('/movie/create', params);
  },
  getPost(params) {
    return api().get(`posts/${params.id}`);
  },
  updatePost(params) {
    return api().put(`posts/${params.id}/update`, params);
  },
  deletePost(id) {
    return api().delete(`posts/${id}/delete`);
  },
};
