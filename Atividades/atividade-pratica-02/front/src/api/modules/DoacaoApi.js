import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/doacaos`, {params: {...filter}})
  },
  create(doacao){
    return Http.post(`/doacaos`, {doacao: {
      ...doacao
    }})
  },
  update(doacao){
    return Http.put(`/doacaos/${doacao.id}`, {
      doacao: {
        ...doacao,
      },
    });
  },
  show(id) {
    return Http.get(`/doacaos/${id}`);
  },

  delete(id){
    return Http.delete(`/doacaos/${id}`)
  }

}
