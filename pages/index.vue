<template>
    <div class="wrapper-content wrapper-content--fixed">
      <Promo/>
      <Intro title="My Lasts posts:"/>
      <!-- posts -->
    </div>
</template>

<script>
import Promo from '@/components/Promo.vue'
import Intro from '@/components/UI/Intro.vue'
export default {
  components: {
    Promo,
    Intro
  }
}
</script>

<style>

</style>
