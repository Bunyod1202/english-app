<template>
  <div class="star-group">
    <div class="star">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
          :fill="star1"
        />
      </svg>
    </div>
    <div class="star">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
        <path
          d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
          :fill="star2"
        />
      </svg>
    </div>
    <div class="star">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
          :fill="star3"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        star1: '#A5A5A5',
        star2: '#A5A5A5',
        star3: '#A5A5A5'
      }
    },
  props: {
      value: {
        type:Number
      }
    },
    created() {
    this.$watch('value', () => {
      if (this.value > 0 && this.value < 2) {
        this.star1  = '#F6E122'
      } else if ( this.value > 1 && this.value < 3) {
        this.star1  = '#F6E122'
        this.star2  = '#F6E122'
      } else if (this.value > 2 && this.value < 4) {
        this.star1 = '#F6E122'
        this.star2 = '#F6E122'
        this.star3  = '#F6E122'
      }
    })
  },
  mounted() {
    if (this.value > 0 && this.value < 2) {
        this.star1  = '#F6E122'
      } else if ( this.value > 1 && this.value < 3) {
        this.star1  = '#F6E122'
        this.star2  = '#F6E122'
      } else if (this.value > 2 && this.value < 4) {
        this.star1 = '#F6E122'
        this.star2 = '#F6E122'
        this.star3  = '#F6E122'
      }
    }
  }
</script>

<style lang="scss" scoped>
.star-group {
  width: 100px;
  display: flex;
  align-items: end;
  justify-content: space-between;
}
</style>
