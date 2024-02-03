export default {
  methods: {
    data () {
      return {
        timerID: null
      }
    },
    debounceKH (callback, time = 500) {
      if (this.timerID) {
        clearTimeout(this.timerID)
      }
      this.timerID = setTimeout(() => {
        callback()
      }, time)
    }
  }
}
