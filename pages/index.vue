<template>
  <div class="container">
    <div class="left-content">
      <Header />
      <FoodIcons />
    </div>
    <div class="right-content">
      <PhonePreview />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import PhonePreview from '~/components/PhonePreview.vue'
import FoodIcons from '~/components/FoodIcons.vue'

export default {
  components: {
    Header,
    PhonePreview,
    FoodIcons
  }
}
</script>

<style scoped>
.container {
  display: flex;
  background-color: #FFA500;
  min-height: 100vh;
  padding: 2rem;
}
.left-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>