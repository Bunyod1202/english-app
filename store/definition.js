export default {
  namespaced: true,
  state () {
    return {
      definition: null,
    }
  },
  mutations:{
    setDefinition(state, definition) {
      state.definition = definition
    },
  },
  actions:{
    async fetchDefinition ({ commit },word) {
      await this.$axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res)=>{
          commit('setDefinition', res.data[0])
          return res.data[0]
        })
    },
  },
}
