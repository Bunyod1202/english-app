<template>
  <div class="container">
    <FirstPage />
    <LoginModal />
  </div>
</template>

<script>
import FirstPage from '../components/FirstPage.vue';
import LoginModal from '../components/LoginModal.vue';
export default {
    name: "IndexPage",
    components: { FirstPage, LoginModal },
}
</script>
<style>

</style>
