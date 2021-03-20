<template>
  <section class="post-list">
      <div class="container">
          <div class="posts__wrapper">
              <!-- {{posts}} -->
              <PostPreview v-for="post in posts"
               :key="post.id"
               :post="post"
               :admin="admin"
               />
          </div>
      </div>
  </section>
</template>

<script>
import PostPreview from '@/components/blog/PostPreview.vue'
// PostPreview.vue
export default {
    components: {
        PostPreview
    },

    props: {

        posts: {
            type:Array,
            required:true
        },

        admin: {
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss">
.posts__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>