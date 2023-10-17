<template>
  <div class="star-group">
    <div class="star">
      <svg :class="star1.className" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
          :fill="star1.color" stroke="#fff"
        />
      </svg>
    </div>
    <div class="star">
      <svg :class="star2.className" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
        <path
          d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
          :fill="star2.color" stroke="#fff"
        />
      </svg>
    </div>
    <div class="star">
      <svg :class="star3.className" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
          :fill="star3.color" stroke="#fff"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      star1: {
        color: '#A5A5A5',
        className:'',
        } ,
      star2: {
        color: '#A5A5A5',
        className:'',
        } ,
      star3:{
        color: '#A5A5A5',
        className:'',
      } ,
        activeStar:false
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
        this.star1.color = '#F6E122'
        this.star1.className = 'star-1'
        setTimeout(() => {
          this.star1.className = ''
        },1000)

      } else if ( this.value > 1 && this.value < 3) {
        this.star1.color  = '#F6E122'
        this.star2.color = '#F6E122'
        this.star2.className = 'star-2'
        setTimeout(() => {
          this.star2.className = ''
        },1000)
      } else if (this.value > 2 && this.value < 4) {
        this.star1.color = '#F6E122'
        this.star2.color = '#F6E122'
        this.star3.color = '#F6E122'
        this.star3.className = 'star-3'
        setTimeout(() => {
          this.star3.className = ''
        },1000)
      }
    })
  },
  mounted() {
    if (this.value > 0 && this.value < 2) {
        this.star1.color  = '#F6E122'
      } else if ( this.value > 1 && this.value < 3) {
        this.star1.color  = '#F6E122'
        this.star2.color  = '#F6E122'
      } else if (this.value > 2 && this.value < 4) {
        this.star1.color = '#F6E122'
        this.star2.color = '#F6E122'
        this.star3.color  = '#F6E122'
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
.star-1,.star-2,.star-3 {
  transition: all 0.5s linear;
  transform: scale(2);
}
</style>
