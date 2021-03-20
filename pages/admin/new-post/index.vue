<template>
<!-- получаю с эмита из newPostForm -->
  <NewPostFrom @submit="onSubmit"/>
</template>

<script>
import NewPostFrom from '@/components/admin/NewPostFrom.vue'
export default {

components: {
    NewPostFrom
},

layout:'admin',

methods: {
    onSubmit(post) {
        // console.log('post added!')
        // console.log(post)
        this.$store.dispatch('actionAddPost', post)
        .then( () => {
            this.$router.push('/admin')
        })
    }
}
}
</script>

<style>

</style>