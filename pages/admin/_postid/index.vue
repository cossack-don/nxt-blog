<template>
<!-- получаю с эмита из newPostForm -->
  <NewPostFrom :postEdit="post" @submit="onSubmit"/>
</template>

<script>
import NewPostFrom from '@/components/admin/NewPostFrom.vue'
export default {

components: {
    NewPostFrom
},

layout:'admin',
    data() {
        return {
                post: {
                        
                id:1,
                title:'1 post',
                discr:'lorem lorem lorem lorem lorem lorem lorem lorem 111111',
                content:"lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ",
                img:require('@/static/img/dog-1.jpg'),
                
            
                },
        }
    },

methods: {
    onSubmit(post) {
        console.log('Post Edding!')
        console.log(post)
    }
}
}
</script>

<style>

</style>