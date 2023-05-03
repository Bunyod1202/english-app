<template>
  <div class="container">
    <BoxItems />
    <LoginModal />
  </div>
</template>

<script>
import BoxItems from '../components/BoxItems.vue';
import LoginModal from '../components/LoginModal.vue';
export default {
    name: "IndexPage",
    components: { BoxItems, LoginModal },
    data() {
        return {
        };
    },
    methods: {

    },
    mounted() {
    }
}
</script>
<style>

</style>
