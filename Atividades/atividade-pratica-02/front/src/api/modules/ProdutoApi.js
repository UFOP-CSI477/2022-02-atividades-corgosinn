import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/produtos`, {params: {...filter}})
  },
  create(produto){
    return Http.post(`/produtos`, {produto: {
      ...produto
    }})
  },
  update(produto){
    return Http.put(`/produtos/${produto.id}`, {
      produto: {
        ...produto,
      },
    });
  },
  show(id) {
    return Http.get(`/produtos/${id}`);
  },

  delete(id){
    return Http.delete(`/produtos/${id}`)
  }

}
