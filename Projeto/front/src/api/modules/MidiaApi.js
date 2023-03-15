import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/midia`, {params: {...filter}})
  },

  create(midia){
    return Http.post(`/midia`, { ...midia })
  },

  update(midia){
    return Http.put(`/midia/${midia.id}`, {
      midia: {
        ...midia,
      },
    });
  },

  show(id) {
    return Http.get(`/midia/${id}`);
  },

  delete(id){
    return Http.delete(`/midia/${id}`)
  },

}
