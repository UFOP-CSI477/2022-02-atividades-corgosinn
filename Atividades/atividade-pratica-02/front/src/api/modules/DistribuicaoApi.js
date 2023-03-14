import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/distribuicaos`, {params: {...filter}})
  },
  create(distribuicao){
    return Http.post(`/distribuicaos`, {distribuicao: {
      ...distribuicao
    }})
  },
  update(distribuicao){
    return Http.put(`/distribuicaos/${distribuicao.id}`, {
      distribuicao: {
        ...distribuicao,
      },
    });
  },
  show(id) {
    return Http.get(`/distribuicaos/${id}`);
  },

  delete(id){
    return Http.delete(`/distribuicaos/${id}`)
  }

}
