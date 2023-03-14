import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/local_coletas`, {params: {...filter}})
  },
  create(local_coleta){
    return Http.post(`/local_coletas`, {local_coleta: {
      ...local_coleta
    }})
  },
  update(local_coleta){
    return Http.put(`/local_coletas/${local_coleta.id}`, {
      local_coleta: {
        ...local_coleta,
      },
    });
  },
  show(id) {
    return Http.get(`/local_coletas/${id}`);
  },

  delete(id){
    return Http.delete(`/local_coletas/${id}`)
  }

}
