<template>
  <div>
    <ul class="list">
      <li class="list-item" v-for="(item) in levels"  >
        <button @click="checkLavel(item.id)" class="list-item__btn" :style="`background-image: url('http://localhost:5000/${item.image}')`" :class="`item-${item.title.toLowerCase()}`"  type="button">
          <p class="item-text">{{ item.title }}</p>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name:'LavelItems',
    async fetch() {
      await this.$store.dispatch('vocabulary/levels/fetchLevels')
    },
    computed: {
      ...mapState({
        levels: state => state.vocabulary.levels.levels,
      })
    },
    methods:{
      checkLavel(val){
        const data = {
          id: 1,
          level_id:Number(val),
          step_name: 'UnitLists'
        }
        this.$emit('nextStep',data);
      }
    }
  }
</script>

<style lang="scss" scoped>
.list {
  margin-top: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.list-item__btn {
  width:185px;
  height: 215px;
  border-radius: 30px;
  border-bottom: 10px solid #7127BA;
}
.item-baginner {
  background-color: #87E070;
  //background-image: url('@/static/image/lavel/baginner.png');
  background-repeat: no-repeat;
  background-position: left -5px top 45px;
}
.item-elementary {
  background-color: #7EA8DA;
  //background-image: url('@/static/image/lavel/elementary.png');
  background-repeat: no-repeat;
  background-position: left -12px top 10px;
}
.item-pre-intermediate {
  background-color: #BE8BC7;
  //background-image: url('@/static/image/lavel/pre-intermediate.png');
  background-repeat: no-repeat;
  background-position: left -16px top 10px;
}
.item-intermediate {
  background-color: #CB5C70;
  //background-image: url('@/static/image/lavel/intermediate.png');
  background-repeat: no-repeat;
  background-position: left -22px top 10px;
}
.item-upper-intermediate {
  background-color: #E7E97F;
  //background-image: url('@/static/image/lavel/upper-intermediate.png');
  background-repeat: no-repeat;
  background-position: left -22px top 10px;
}
.item-text {
  margin-top: -80px;
  color: #7127BA;
  font-family: Preahvihear;
  font-size: 16px;
  font-weight: 400;
  line-height: 107.7%;
  letter-spacing: 0.32px;
}
</style>
