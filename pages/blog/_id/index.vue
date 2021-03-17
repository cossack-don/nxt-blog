<template>
        <div class="wrapper-content wrapper-content--fixed">
            <!-- <section class="post">
                <div class="container">
                    

                    <div class="post-header">
                        <img :src="post.img" :alt="post.title">
                        <h1 class="title">{{post.title}}</h1>
                        <p>{{post.discr}}</p>
                    </div>

                    <div class="post-body">
                        <p>{{post.content}}</p>
                    </div>
                </div>
            </section> -->

            <Post :post="post"/>
            <Comments :comments="comments"/>
            <NewComment/>
        </div>
</template>

<script>
import Post from '@/components/blog/Post.vue'
import NewComment from '@/components/comments/NewComment.vue'
import Comments from '@/components/comments/Comments.vue'


export default {
    components: {
        Post,
        Comments,
        NewComment,
        
    },
data() {
    return {
        post: {
                   
          id:1,
          title:'1 post',
          discr:'lorem lorem lorem lorem lorem lorem lorem lorem 111111',
          content:"lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ",
          img:require('@/static/img/dog-1.jpg'),
          
       
        },

        comments: [
            {
                name:'Alex',
                text:'Lorem lorem lorem lore lorem'
            },
             {
                name:'Gosha',
                text:'Lorem lorem lorem lore lorem'
            },
        ]
    }
}
}
</script>

<style lang="scss"> 
.post {
    max-width: 900px;
    margin:0 auto;
}
.post-header {
    text-align: center;
    margin-bottom: 30px;
    
    img {
        max-width: 400px;
        margin-bottom: 16px;
    }

    p {
        color: #999999;
    }
}

.post-body{
    text-align: left;
}
</style>