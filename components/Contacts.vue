<template>
  <section class="contact">
      <div class="container">
          <h2 class="title">Contact me!</h2>
          <form @submit.prevent="onSubmit" class="contact-form">

              <label>Name:</label>
              <input type="text" v-model="user.name">
              <label>Email:</label>
              <input type="text" v-model="user.email">
              <label>Text:</label>
              <textarea v-model="user.text"></textarea>

                <!-- BTNS -->
              <div class="controls">
                  <!-- <button class="btn btnWhite"> Submit! </button> -->
                  <AppButton class="btnWhite" > Submit! </AppButton>
              </div>
          </form>
      </div>
  </section>
</template>

<script>
import AppButton from '@/components/UI/controls/Button.vue'

export default {
    components:{
        AppButton
    },
data() {
    return {
        user: {
            name:'',
            email:'',
            text:''
        }
    }
},

methods: {
    onSubmit() {
        console.log(this.user)
    }
}
}
</script>

<style lang="scss">
.contact {
    text-align: center;
    background-color: #4f69f4;
    color: #fff;

    .title {
        color:#fff ;
    }

    .contact-form {
        margin: 30px auto;
        max-width: 600px;

    }

    .controls {
        margin: 30px auto;

    }
}
</style>