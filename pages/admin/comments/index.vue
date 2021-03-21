<template>

<no-ssr>
  <CommentTable :thead="['Name','Text','Status','Change Status', 'Delete']">
      <tbody slot="tbody">
          <tr v-for="comment in comments" :key="comment.id">
              <td><span>{{comment.name}}</span></td>
              <td><span>{{comment.text}}</span></td>
                <td>
                    <span v-if="comment.publish" class="status true">Publish</span>
                    <span v-else class="status false">Hiden</span>
                </td>

              <td><span @click="changeComment(comment)" class="link">Change Status</span></td>
              <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>

          </tr>
      </tbody>
  </CommentTable>

</no-ssr>
</template>

<script>
import axios from 'axios'
import CommentTable from '@/components/admin/CommentTable.vue'
export default {

components: {
    CommentTable
},

layout:'admin',
    data() {
        return {
            comments:[]
                // comments: [
                //     {id:1,name:'alex', text:"lorem lorem lorem", status:true},
                //     {id:2,name:'saha', text:"lorem lorem lorem222",status:false}
                // ]
        }
    },

    mounted() {
        this.loadComments()
    },

methods: {

    changeComment(comment) {
        comment.publish = !comment.publish
        // console.log(comment)
        axios
        .put(`https://nxt-blog-3562d-default-rtdb.firebaseio.com/comments/${comment.id}.json`, comment)
        // console.log(`change comment id - ${id}`)
    },

    deleteComment(id) {
        axios
        .delete(`https://nxt-blog-3562d-default-rtdb.firebaseio.com/comments/${id}.json`)
        .then( (res) => {this.loadComments()})
        // console.log(`delete comment id - ${id}`)
    },

    loadComments () {
        
        axios.get('https://nxt-blog-3562d-default-rtdb.firebaseio.com/comments.json')
        .then( (res) => {
            if (!res.data) {res.data={}}
            let commentsArray = []
            Object.keys(res.data).forEach(key => {
                const comment = res.data[key]
                commentsArray.push({...comment, id: key})
            })
            // console.log(commentsArray)
            this.comments = commentsArray
        })
    }
}
}
</script>

<style>

</style>