export default {
  namespaced: true,
  state () {
    return {
      lessons: null,
      lesson: null
    }
  },
  mutations:{
    setLessons(state, lessons) {
      state.lessons = lessons
    },
    setLesson(state, lesson) {
      state.lesson = lesson
    }
  },
  actions:{
    async fetchLessons ({ commit },data) {
      await this.$axios.get(`lessons?unit_id=${data.unitId}&user_id=${data.userId}`)
        .then((res)=>{
          commit('setLessons', res.data.result)
          return res
        })



    },
  async fetchLesson ({ commit },id) {
    await this.$axios.get(`lessons/${id}`)
      .then((res)=>{
        commit('setLesson', res.data.result)
        return res
      })
    },
  },
}
