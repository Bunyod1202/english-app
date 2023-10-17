export default {
  namespaced: true,
  state () {
    return {
      levels: null
    }
    },
  mutations:{
    setLevels(state, levels) {
      state.levels = levels
    }
  },
  actions:{
    async fetchLevels ({ commit }) {
       await this.$axios.get('levels')
         .then((res)=>{
            console.log(res.data.result)
            commit('setLevels', res.data.result)
            return res
         })



    },
  }

}
