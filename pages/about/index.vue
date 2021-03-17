<template>
  <div class="wrapper-content wrapper-content--fixed">
      <section class="about">
          <div class="container">
              <h1 class="title">About my blog:</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem, corporis odit eos doloribus quibusdam minima beatae neque ipsum blanditiis!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem, corporis odit eos doloribus quibusdam minima beatae neque ipsum blanditiis!</p>
              <Intro title="Lorem lorem"/>
              <img src="@/assets/img/about.jpg" alt="">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem, corporis odit eos doloribus quibusdam minima beatae neque ipsum blanditiis!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem, corporis odit eos doloribus quibusdam minima beatae neque ipsum blanditiis!</p>
          </div>
      </section>
      about
  </div>
</template>

<script>
import Intro from '@/components/UI/Intro.vue'

export default {
components:{
    Intro
}
}
</script>

<style lang="scss">
.about {
    text-align: center;
    p {
        margin-bottom: 10px;
    }
}
</style>