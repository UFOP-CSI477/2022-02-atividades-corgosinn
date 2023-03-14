import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/pessoas`, {params: {...filter}})
  },
  create(pessoa){
    return Http.post(`/pessoas`, {pessoa: {
      ...pessoa
    }})
  },
  update(pessoa){
    return Http.put(`/pessoas/${pessoa.id}`, {
      pessoa: {
        ...pessoa,
      },
    });
  },
  show(id) {
    return Http.get(`/pessoas/${id}`);
  },

  delete(id){
    return Http.delete(`/pessoas/${id}`)
  }

}
