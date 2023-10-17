<template>
  <div>
    <ul class="unit-list">
      <li class="unit-item" v-for="(item) in data">
        <button class="btn-unit" @click="checkUnit(item.id)">
          <p class="unit-text">{{ item.name }}</p>
          <span class="unit-box"></span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Beginner from "~/data/beginner";
export default {
  name: "UnitLists",
  props: {
    lavelType:{
      type: String,
      default: ""
    }
  },
  data(){
    return{
      data:[]
    }
  },
  mounted() {
    if (this.lavelType == "baginner") {
      this.data = Beginner
      console.log(this.lavelType)
    }
  },
  methods:{
    checkUnit(id){
      console.log(Beginner.find((e) => e.id == id))
      const data = {
        id: 2,
        lavel_type:this.lavelType,
        unit_id: Beginner.find((e) => e.id == id),
        step_name: 'LessonsStep'
      }
      this.$emit('nextStep',data)
    }
  }
}
</script>

<style lang="scss" scoped>
.unit-list {
  width: 800px;
  margin:0 auto ;
}
.unit-item{
  margin-top: 40px;
  position: relative;
  &:last-child {
    &::after {
      display: none;
    }
  }
  &::before {
    content:'';
    width: 20px;
    height: 20px;
    position: absolute;
    left: -80px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 5px solid #fff;
  }
  &::after {
    content:'';
    width: 5px;
    height: 125px;
    position: absolute;
    left: -68px;
    top: 70px;
    background-color: #fff;
  }
}
.btn-unit {
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 31px;
  border-left: 12px solid #fff;
  background: #7346B1;
  box-shadow: 17px 6px 4px 0px rgba(0, 0, 0, 0.25) inset;
  .unit-text {
    color: #fff;
    font-family: Preahvihear;
    font-size: 40px;
    font-weight: 400;
  }
  .unit-box {
    background-color: #fff;
    border-radius: 50%;
    color: #fff;
    width: 60px;
    height: 60px;
    display: block;
    fill: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
}
</style>
