<template>
    <div class="wrapper-content wrapper-content--fixed">
      <Promo/>
      <Intro title="My Lasts posts:"/>
      <!-- posts -->
      <PostsList :posts="posts" />
      <Contacts/>
    </div>
</template>

<script>
import Promo from '@/components/Promo.vue'
// import Intro from '@/components/UI/Intro.vue'
// import PostsList from '@/components/blog/PostsList.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  components: {
    Promo,
    // Intro,
    // PostsList,
    Contacts
  },
  // asyncData  ИСПОЛЬЗУЮТСЯ ДЛЯ АСИНХРОННЫХ ЗАПРОСОВ В NUXT ВО VUE ТАКОГО НЕТ
  // asyncData(context) {
  //   return new Promise ( (res,rej) => {

  //     setTimeout(() => {
  //       res({
  //         posts: [
  //       {
  //         id:1,
  //         title:'1 post',
  //         discr:'lorem lorem lorem lorem lorem lorem lorem lorem 111111',
  //         img:require('@/static/img/dog-1.jpg')
  //       },
  //         ]
  //       })
  //     }, 1500);

  //   })
  //   .then(data => {
  //     return data
  //   })
  //   .catch (e => {
  //     context.error(e)
  //   })
  // },
  computed: {
    posts() {
      return this.$store.getters.getPostsLoaded
    }
  },
  data() {
    return {
      // posts: [
      //   {
      //     id:1,
      //     title:'1 post',
      //     discr:'lorem lorem lorem lorem lorem lorem lorem lorem 111111',
      //     img:require('@/static/img/dog-1.jpg')
      //   },
        //         {
        //   id:2,
        //   title:'2 post',
        //   discr:'lorem lorem lorem lorem lorem lorem lorem lorem 2222222',
        //   img:require('@/static/img/dog-2.jpg')
        // },
        //         {
        //   id:3,
        //   title:'3 post',
        //   discr:'lorem lorem lorem lorem lorem lorem lorem lorem 333333',
        //   img:require('@/static/img/dog-1.jpg')
        // },
      // ]
    }
  }
}
</script>
