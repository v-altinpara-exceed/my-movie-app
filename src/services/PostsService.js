import api from './api';

export default {
  fetchPosts() {
    return api().get('/movie/usersList');
  },
  newPosts(params) {
    return api().post('/movie/create', params);
  },
  deletePost(params) {
    return api().delete(`movie/${params.id}/delete`);
  },
  getPost(params) {
    return api().get(`movie/${params.id}`);
  },
  updatePost(params) {
    return api().put(`movie/${params.movie.id}/update`, {
      nameMovie: params.movie.nameMovie,
      descriptionMovie: params.movie.descriptionMovie,
      genreMovie: params.movie.genreMovie,
      posterMovie: params.movie.posterMovie,
    });
  },
};
