export default {
  namespaced: true,
  state () {
    return {
      result: null,
      editResult:null
    }
  },
  mutations:{
    setResult(state, result) {
      state.result = result
    },
    editResult(state, result) {
      state.sditResult = result
    }
  },
  actions:{
    async createResult ({ commit },data) {
      await this.$axios.post('results', data)
        .then((res)=>{
          commit('setResult', res.data.result)
          return res
        })
    },
  async editResult ({ commit },data) {
    await this.$axios.put(`results/${data.id}`, data.data)
      .then((res)=>{
        commit('editResult', res.data.result)
        return res
      })
  },
  },
}
