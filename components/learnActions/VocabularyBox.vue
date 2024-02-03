<template>
  <div class="container">
    <keep-alive>
      <component
        :is="steps"
        :lavelId="lavelId"
        :unit-id="unitId"
        :result="result"
        :lessonId="lessonId"
        @nextStep="nextStep"
      />
    </keep-alive>
  </div>
</template>

<script>
import UnitLists from "~/components/units/UnitLists.vue";
import LessonsStep from "~/components/lessons/LessonStep.vue";
import LavelItems from "~/components/LavelItems.vue";
export default {
  name: 'VocabularyBox',
  components:{
    UnitLists,
    LavelItems,
    LessonsStep
  },
  data(){
    return {
      steps:'LavelItems',
      lavelId: null,
      unitId: null,
      lessonId: null,
      result: null,
    }
  },
  methods:{
    nextStep(val){
      console.log(val)
      this.lavelId = val?.level_id
      this.steps = val.step_name
      this.unitId = val.unit_id
      this.lessonId = val.lesson_id
      this.result = val.result
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
