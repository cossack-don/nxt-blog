<template>
  <section class="new-comment">
      <div class="container">

          <h2 class="title">New comments:</h2>

          <!-- message -->
          <Message v-if="message" :message="message"/>


          <form @submit.prevent="onSubmit" class="contact-form">

             <!-- input -->
              <AppInput v-model="comment.name">Name:</AppInput>
            <!-- textarea -->
              <AppTextArea v-model="comment.text">Text:</AppTextArea>

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
// import axios from 'axios'
// import Message from '@/components/UI/Message.vue'
// import AppButton from '@/components/UI/controls/Button.vue'
// import AppInput from '@/components/UI/controls/Input.vue'
// import AppTextArea from '@/components/UI/controls/TextArea.vue'

export default {
    // components:{
    //     AppButton,
    //     AppInput,
    //     AppTextArea,
    //     Message
        
    // },
data() {
    return {
        message:null,
        comment: {
            name:'',
            text:''
        }
    }
},

methods: {
    onSubmit() {
        this.$store.dispatch('actionAddComment',
         {
            postid:'',
            publish:false,
            ...this.comment
        })
        .then( () => {
        this.message = 'Submited'

                // reset
        this.comment.name = ''
        this.comment.text = ''
        })
        .catch(e => console.log(e))

        
        // console.log(this.comment)


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