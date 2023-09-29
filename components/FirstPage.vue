<template>
  <div>
    <Banner/>
    <p class="content">
      Salom siz tillarni organmoqchimisiz?
      siz soz yod olishga qiynalayapsizm?
      Unda bizda bunga yechimlar bor.
      Bu oyinni boshlab siz soz yod olib va shu sozlarga
      gaplar tuzishini organasiz
    </p>
    <button @click="$router.push('/StepGroup')" class="start-btn" type="button">start</button>
  </div>
</template>

<script>
import Banner from "~/components/elements/Banner.vue";

export default {
name:'FirstPage',
  components: {Banner}
}
</script>

<style lang="scss" scoped>
.content {
  padding: 0 255px;
  color: #FFF;
  text-align: center;
  font-family: Preahvihear;
  font-size: 30px;
  font-weight: 400;
  line-height: 107.7%;
  letter-spacing: 0.72px;
}
.start-btn {
  margin-left:50%;
  transform: translateX(-50%);
  width: 166px;
  height: 166px;
  border-radius: 50%;
  border: 14px solid #7127BA;
  fill: #E5B8FF;
  filter: drop-shadow(6px 7px 16px rgba(255, 255, 255, 0.81));
  color: #11071F;
  font-family: Preahvihear;
  font-size: 23px;
  font-style: normal;
  font-weight: bold;
  line-height: 107.7%; /* 24.771px */
  letter-spacing: 0.46px;
}
</style>
