import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/local_coleta`, {params: {...filter}})
  },
  create(local_coleta){
    return Http.post(`/local_coleta`, {local_coletum: {
      ...local_coleta
    }})
  },
  update(local_coleta){
    return Http.put(`/local_coleta/${local_coleta.id}`, {
      local_coletum: {
        ...local_coleta,
      },
    });
  },
  show(id) {
    return Http.get(`/local_coleta/${id}`);
  },

  delete(id){
    return Http.delete(`/local_coleta/${id}`)
  }

}
