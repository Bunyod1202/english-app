<template>
  <div class="banner">
    <span class="white-dog"></span>
    <span class="brown-dog"></span>
    <span class="yellow-cat"></span>
    <span class="white-cat"></span>
    <span class="grey-cat"></span>
  <h1 class="banner-title">
    ENGLISH
  </h1>
  </div>
</template>

<script>
export default {
  name:'Banner',
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 500px;
  position: relative;
}
.banner-title {
  position: absolute;
  top: 50px;
  color: transparent;
  width: 100%;
  height: 479px;
  background-image: url('@/static/image/ENGLISH.png');
  background-repeat: no-repeat;
  background-size: 800px;
  background-position: center;
  z-index: 2;
}
.white-dog {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 150px;
  left: -150px;
  background-image: url("@/static/image/happy-dog.gif");
  background-size: cover;
}
.brown-dog {
  width: 360px;
  height: 360px;
  position: absolute;
  top: 100px;
  left: 85%;
  background-image: url("@/static/image/brown-dog.gif");
  background-size: cover;
}
.yellow-cat {
  width: 320px;
  height: 320px;
  position: absolute;
  top: 30px;
  left: 10%;
  background-image: url("@/static/image/yellow-cat.gif");
  background-size: cover;
}
.white-cat {
  width: 320px;
  height: 320px;
  position: absolute;
  top: 40px;
  left: 65%;
  background-image: url("@/static/image/white-cat.gif");
  background-size: cover;
}
.grey-cat {
  width: 260px;
  height: 260px;
  position: absolute;
  top: 50px;
  left: 40%;
  background-image: url("@/static/image/grey-cat.gif");
  background-size: cover;
}
</style>
