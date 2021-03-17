<template>
  <section class="new-comment">
      <div class="container">
          <form @submit.prevent="onSubmit" class="contact-form">

              <label>Name:</label>
              <input type="text" v-model="comment.name">
              <label>Text:</label>
              <textarea v-model="comment.text"></textarea>

                <!-- BTNS -->
              <div class="controls">
                  <!-- <button class="btn btnWhite"> Submit! </button> -->
                  <AppButton> Submit! </AppButton>
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
        comment: {
            name:'',
            text:''
        }
    }
},

methods: {
    onSubmit() {
        console.log(this.comment)
    }
}
}
</script>

<style lang="scss">
.new-comment {
    text-align: center;
    // background-color: #4f69f4;
    // color: #fff;

    // .title {
    //     color:#fff ;
    // }

    .contact-form {
        margin: 30px auto;
        max-width: 600px;

    }

    .controls {
        margin: 30px auto;

    }
}
</style>