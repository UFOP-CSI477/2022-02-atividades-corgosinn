import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/cidades`, {params: {...filter}})
  },
  create(cidade){
    return Http.post(`/cidades`, {cidade: {
      ...cidade
    }})
  },
  update(cidade){
    return Http.put(`/cidades/${cidade.id}`, {
      cidade: {
        ...cidade,
      },
    });
  },
  show(id) {
    return Http.get(`/cidades/${id}`);
  },

  delete(id){
    return Http.delete(`/cidades/${id}`)
  }

}
