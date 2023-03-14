import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/tipo_sanguinios`, {params: {...filter}})
  },
  create(tipo_sanguinio){
    return Http.post(`/tipo_sanguinios`, {tipo_sanguinio: {
      ...tipo_sanguinio
    }})
  },
  update(tipo_sanguinio){
    return Http.put(`/tipo_sanguinios/${tipo_sanguinio.id}`, {
      tipo_sanguinio: {
        ...tipo_sanguinio,
      },
    });
  },
  show(id) {
    return Http.get(`/tipo_sanguinios/${id}`);
  },

  delete(id){
    return Http.delete(`/tipo_sanguinios/${id}`)
  }

}
