import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/estados`, {params: {...filter}})
  },
  create(estado){
    return Http.post(`/estados`, {estado: {
      ...estado
    }})
  },
  update(estado){
    return Http.put(`/estados/${estado.id}`, {
      estado: {
        ...estado,
      },
    });
  },
  show(id) {
    return Http.get(`/estados/${id}`);
  },

  delete(id){
    return Http.delete(`/estados/${id}`)
  }

}
