<template>
<!-- $listeners !!! для передачи событий в комп Contacts => AppButton, чтобы каждное не имитить  -->
  <!-- v-bind $attrs для баинда атрибутов и остального -->
  <button class="btn" :class="btnClass" v-on="$listeners" v-bind="$attrs">

      <!-- slot -->
      <slot/>

  </button>
</template>

<script>
export default {
props: {
    btnClass:{
        type:String,
        default:'btnPrimary'
    }
}
}
</script>

<style>

</style>