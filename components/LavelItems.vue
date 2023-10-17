<template>
  <div>
    <ul class="list">
      <li class="list-item">
        <button @click="checkLavel('baginner')" class="list-item__btn item-baginner" type="button">
          <p class="item-text">Baginner</p>
        </button>
      </li>
      <li class="list-item">
        <button @click="checkLavel('elementary')" class="list-item__btn item-elementary" type="button">
          <p class="item-text">Elementary</p>
        </button>
      </li>
      <li class="list-item">
        <button @click="checkLavel('pre-intermediate')" class="list-item__btn item-pre-intermediate" type="button">
          <p class="item-text">Pre-Intermediate</p>
        </button>
      </li>
      <li class="list-item">
        <button @click="checkLavel('intermediate')" class="list-item__btn item-intermediate" type="button">
          <p class="item-text">Intermediate</p>
        </button>
      </li>
      <li class="list-item">
        <button @click="checkLavel('upper-intermediate')" class="list-item__btn item-upper-intermediate" type="button">
          <p class="item-text">Upper-Intermediate</p>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'LavelItems',
    methods:{
      checkLavel(val){
        console.log(val,'lavel type')
        const data = {
          id: 1,
          lavel_type:val,
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
  background-image: url('@/static/image/lavel/baginner.png');
  background-repeat: no-repeat;
  background-position: left -5px top 45px;
}
.item-elementary {
  background-color: #7EA8DA;
  background-image: url('@/static/image/lavel/elementary.png');
  background-repeat: no-repeat;
  background-position: left -12px top 10px;
}
.item-pre-intermediate {
  background-color: #BE8BC7;
  background-image: url('@/static/image/lavel/pre-intermediate.png');
  background-repeat: no-repeat;
  background-position: left -16px top 10px;
}
.item-intermediate {
  background-color: #CB5C70;
  background-image: url('@/static/image/lavel/intermediate.png');
  background-repeat: no-repeat;
  background-position: left -22px top 10px;
}
.item-upper-intermediate {
  background-color: #E7E97F;
  background-image: url('@/static/image/lavel/upper-intermediate.png');
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
