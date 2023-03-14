import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/unidades`, {params: {...filter}})
  },
  create(unidade){
    return Http.post(`/unidades`, {unidade: {
      ...unidade
    }})
  },
  update(unidade){
    return Http.put(`/unidades/${unidade.id}`, {
      unidade: {
        ...unidade,
      },
    });
  },
  show(id) {
    return Http.get(`/unidades/${id}`);
  },

  delete(id){
    return Http.delete(`/unidades/${id}`)
  }

}
