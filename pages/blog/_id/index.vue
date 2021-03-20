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
            <!-- <p>{{comments}}</p> -->
            <NewComment :postid="$route.params.id"/>
        </div>
</template>

<script>
import Post from '@/components/blog/Post.vue'
import NewComment from '@/components/comments/NewComment.vue'
import Comments from '@/components/comments/Comments.vue'

import axios from 'axios'


export default {
    components: {
        Post,
        Comments,
        NewComment,
        
    },

    async asyncData(context) {
        let [post, comments] = await Promise.all([
            axios.get(`https://nxt-blog-3562d-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
            axios.get(`https://nxt-blog-3562d-default-rtdb.firebaseio.com/comments.json`)
        ])

// 1-ЫЙ ВАРИАНТ ! ОБА РАБОЧИЕ
// 
        // let commentsArray = [],
        // commentsArrayRes = []
        // Object.keys(comments.data).forEach(key => {
        //     commentsArray.push(comments.data[key])
        // })

        // for(let i=0; i < commentsArray.length; i++) {
        //     if(commentsArray[i].postid === context.params.id && commentsArray[i].publish === true) {
        //         commentsArrayRes.push(commentsArray[i])
        //     }
        // }
        
// 2-Й ВАРИАНТ ОБА РАБОЧИЕ
// 
        let commentsArrayRes = Object.values(comments.data).filter(comment => (comment.postid ===  context.params.id) && comment.publish === true)
        
        return {
            post: post.data,
            comments: commentsArrayRes
        }
    }
// data() {
//     return {
//         post: {
                   
//           id:1,
//           title:'1 post',
//           discr:'lorem lorem lorem lorem lorem lorem lorem lorem 111111',
//           content:"lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh lorem lorem lorem hahahahahahahahahahahahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ",
//           img:require('@/static/img/dog-1.jpg'),
          
       
//         },

//         comments: [
//             {
//                 name:'Alex',
//                 text:'Lorem lorem lorem lore lorem'
//             },
//              {
//                 name:'Gosha',
//                 text:'Lorem lorem lorem lore lorem'
//             },
//         ]
//     }
// }
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