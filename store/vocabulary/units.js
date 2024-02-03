export default {
  namespaced: true,
  state () {
    return {
      units: null
    }
  },
  mutations:{
    setUnits(state, units) {
      state.units = units
    }
  },
  actions:{
    async fetchUnits ({ commit },id) {
      await this.$axios.get(`units/${id}`)
        .then((res)=>{
          commit('setUnits', res.data.result)
          return res
        })
    },
  }

}
