<template>
  <div class="container">
    <keep-alive>
      <component
        :is="steps"
        :lavelType="lavelType"
        :unit-id="unitId"
        :lessons="lessons"
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
      lavelType: '',
      unitId: null,
      lessons: null,
    }
  },
  methods:{
    nextStep(val){
      console.log(val)
      this.lavelType = val?.lavel_type
      this.steps = val.step_name
      this.unitId = val.unit_id
      this.lessons = val.lesson_data
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
