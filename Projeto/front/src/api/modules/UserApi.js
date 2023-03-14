import Http from '../http'

export default {

  index(filter) {
    return Http.get(`/users`, {params: {...filter}})
  },


  create(user){
    return Http.post(`/users`, {user: {
      ...user
    }})
  },

  update(user){
    return Http.put(`/users/${user.id}`, {
      user: {
        ...user,
      },
    });
  },

  show(id) {
    return Http.get(`/users/${id}`);
  },

  delete(id){
    return Http.delete(`/users/${id}`)
  },

}
