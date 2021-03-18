<template>
  <section class="new-post">
      <div class="container">
          <!-- form -->
          <form @submit.prevent>

              <AppInput v-model="post.title">Title</AppInput>
              <AppInput v-model="post.discr">Discr</AppInput>
              <AppInput v-model="post.img">Img link</AppInput>
              <AppTextArea v-model="post.content">Content</AppTextArea>

    <!-- BTNS -->
              <div class="contorls">
                  <AppButton class="btnDanger" @click="cancel">Cancel</AppButton>
                  <AppButton @click="onSubmit">Save</AppButton>
              </div>
          </form>

      </div>
  </section>
</template>

<script>
export default {

    props:{
        postEdit: {
            type:Object,
            required:false
        }
    },
        
    data() {
        return {
            // тернарное условие наподобие if else
            post: this.postEdit ? {

                ...this.postEdit

                } : {

                title:'',
                discr:'',
                img:'',
                content:''
            }
        }
    },

methods:{

    cancel() {
        this.$router.push('/admin/')
    },

    onSubmit() {
        this.$emit('submit', this.post)
    }
}
}
</script>

<style lang="scss" scoped>
.contorls {
    text-align: center;
    margin: 20px 0;
}
</style>