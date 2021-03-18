<template>
  <section class="not-found">
      <div class="container">
          <div class="not-found__wrapper">
          <p class="title">Page not Found</p>
          <nuxt-link to="/" class="not-found__link">Back to main Page</nuxt-link>
        </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.not-found__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80vh;
}
.not-found__link {
    font-weight: bold;
    text-decoration: revert;
}
</style>