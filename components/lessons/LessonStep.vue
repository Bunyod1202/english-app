<template>
  <div>
    <ul class="lesson-list">
      <li  v-for="(item) in lessons">
        <button @click="checkLesson(item.id,item?.results[0])" class="lesson-item" type="button">
        <span class="item-header " :class="item?.results.length? 'item-success':'item-close'">{{ item?.results[0]?.status }}</span>
        <p class="item-text">{{ item.id }}</p>
        <StarStep :value="item?.results[0]?.rates"/>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import StarStep from "~/components/ui/StarStep.vue";
import Beginner from "~/data/beginner";
import {mapState} from "vuex";
export default {
  name:'LessonStep',
  components:{
    StarStep
  },
  props:{
    unitId:{
      type:Number,
      default:null
    }
  },
  data(){
    return {
      data:[],
      getLesson: {
        userId: 1,
        unitId: this.unitId
      }
    }
  },
  async fetch() {
    await this.$store.dispatch('vocabulary/lessons/fetchLessons',this.getLesson)
  },
  computed: {
    ...mapState({
      lessons: state => state.vocabulary.lessons.lessons,
    })
  },
  methods: {
    checkLesson(id,result) {
      const data = {
        id: 3,
        lesson_id: id,
        result:result,
        step_name: 'BoxItems'
      }
      this.$emit('nextStep',data)
    }
  }
}
</script>
<style lang="scss" scoped>
.item-success {
  background-color: #7CF87A;
  border: 5px solid #418b2c;
}
.item-close {
  background-color: #CB5C70;
  border: 5px solid #D44F4F;
}
.lesson-list{
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
}
.lesson-item {
  margin: 0 23px;
  height: 215px;
  width: 185px;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  border-bottom: 10px solid #7127BA;
  background: #87E070;
}
.item-text {
  margin-top: 40px;
  color: #FFF;
  font-family: Preahvihear;
  font-size: 133px;
  font-weight: 400;
  line-height: 80.7%;
}
.item-header {
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  fill: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
