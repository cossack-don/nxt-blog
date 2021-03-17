<template>
  <section class="contact">
      <div class="container">
          <h2 class="title">Contact me!</h2>
          <form @submit.prevent="onSubmit" class="contact-form">

              <!-- name -->
              <AppInput v-model="user.name">Name:</AppInput>
              <!-- email -->
              <AppInput v-model="user.email" type="email">Email:</AppInput>
              <!-- textarea -->
              <AppTextArea v-model="user.text">Text:</AppTextArea>

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
import AppInput from '@/components/UI/controls/Input.vue'
import AppTextArea from '@/components/UI/controls/TextArea.vue'


export default {
    components:{
        AppButton,
        AppInput,
        AppTextArea
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