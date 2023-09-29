<template>
  <div>
    <keep-alive>
      <component :is="currentComponent"/>
    </keep-alive>
  </div>
</template>
<script>
import VocabularyBox from "~/components/learnActions/VocabularyBox.vue";
  export default {
    name: 'StepGroup',
    components: {
      VocabularyBox
    },
    data(){
      return {
        currentComponent:"VocabularyBox",
      }
    },
    methods:{
      // setCurrentComponent (completedStep, formName) {
      //   switch (completedStep) {
      //     case 1:
      //       switch (formName) {
      //         case 'travel':
      //           this.currentComponent = 'Travel-Step2'
      //           break
      //
      //         case 'accident':
      //           this.currentComponent = 'Accident-Step2'
      //           break
      //
      //         case 'osago':
      //           this.currentComponent = 'Osago-Step2'
      //           break
      //
      //         case 'kasko':
      //           this.currentComponent = 'Kasko-Step2'
      //           break
      //       }
      //       break
      //     case 2:
      //       switch (formName) {
      //         case 'travel':
      //           this.currentComponent = 'Travel-Step3'
      //           break
      //
      //         case 'accident':
      //           this.currentComponent = 'Accident-Step3'
      //           break
      //
      //         case 'osago':
      //           this.currentComponent = 'Osago-Step3'
      //           break
      //
      //         case 'kasko':
      //           this.currentComponent = 'Kasko-Step3'
      //           break
      //       }
      //       break
      //     case 3:
      //       switch (formName) {
      //         case 'travel':
      //           this.currentComponent = 'Travel-Step4'
      //           break
      //
      //         case 'accident':
      //           this.currentComponent = 'Accident-Step4'
      //           break
      //
      //         case 'osago':
      //           this.currentComponent = 'Osago-Step4'
      //           break
      //
      //         case 'kasko':
      //           this.currentComponent = 'Kasko-Step4'
      //           break
      //       }
      //       break
      //     case 4:
      //       switch (formName) {
      //         case 'travel':
      //           this.currentComponent = 'Travel-Step5'
      //           break
      //
      //         case 'accident':
      //           this.currentComponent = 'Accident-Step5'
      //           break
      //
      //         case 'osago':
      //           this.currentComponent = 'Osago-Step5'
      //           break
      //
      //         case 'kasko':
      //           this.currentComponent = 'Kasko-Step5'
      //           break
      //       }
      //       break
      //     case 5:
      //       switch (formName) {
      //         case 'travel':
      //           this.currentComponent = 'Travel-Step5'
      //           break
      //
      //         case 'accident':
      //           this.currentComponent = 'Accident-Step5'
      //           break
      //       }
      //       break
      //   }
      // }
    }
  }
</script>
<style scoped lang="scss">

</style>
