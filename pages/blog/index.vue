<template>
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="My posts:"/>
      <!-- posts -->
      <PostsList :posts="posts" />
    </div>
</template>

<script>
// import Intro from '@/components/UI/Intro.vue'
// import PostsList from '@/components/blog/PostsList.vue'

export default {
  // components: {
  //   Intro,
  //   PostsList,
  // },
  data() {
    return {
      // posts:[]
      // posts: [
      //   {
      //     id:1,
      //     title:'1 post',
      //     discr:'lorem lorem lorem lorem lorem lorem lorem lorem 111111',
      //     img:require('@/static/img/dog-1.jpg')
      //   },
      //           {
      //     id:2,
      //     title:'2 post',
      //     discr:'lorem lorem lorem lorem lorem lorem lorem lorem 2222222',
      //     img:require('@/static/img/dog-2.jpg')
      //   },
      //           {
      //     id:3,
      //     title:'3 post',
      //     discr:'lorem lorem lorem lorem lorem lorem lorem lorem 333333',
      //     img:require('@/static/img/dog-1.jpg')
      //   },
      // ]
    }
  },
    computed: {
    posts() {
      return this.$store.getters.getPostsLoaded
    }
    }
}
</script>
