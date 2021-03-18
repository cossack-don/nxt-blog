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
        console.log('post added!')
        console.log(post)
    }
}
}
</script>

<style>

</style>