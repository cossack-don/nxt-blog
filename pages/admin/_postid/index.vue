<template>
<!-- получаю с эмита из newPostForm -->
  <NewPostFrom :postEdit="post" @submit="onSubmit"/>
</template>

<script>
import NewPostFrom from '@/components/admin/NewPostFrom.vue'
import axios from 'axios'

export default {

components: {
    NewPostFrom
},

layout:'admin',
  asyncData(context) {

        return axios.get(`https://nxt-blog-3562d-default-rtdb.firebaseio.com/posts/${context.params.postid}.json` )
        .then(res => {
            
        return {
            
            post:{
                
                ...res.data,
                id:context.params.postid
            }
        }
        })
        .catch(e => context.error(e))
  },
    // data() {
    //     return {
    //             post: {
                        
    //             id:1,
    //             title:'1 post',
    //             discr:'lorem lorem lorem lorem lorem lorem lorem lorem 111111',
    //             content:"lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ",
    //             img:require('@/static/img/dog-1.jpg'),
                
            
    //             },
    //     }
    // },

methods: {
    onSubmit(post) {
        console.log('Post Edding!')
        // console.log(post)
        this.$store.dispatch('actionEditPost', post)
        .then( () => {
         this.$router.push('/admin')
        })
    }
}
}
</script>

<style>

</style>