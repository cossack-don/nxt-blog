<template>


  <CommentTable :thead="['Name','Text','Status','Change Status', 'Delete']">
      <tbody slot="tbody">
          <tr v-for="comment in comments" :key="comment.id">
              <td><span>{{comment.name}}</span></td>
              <td><span>{{comment.text}}</span></td>
                <td>
                    <span v-if="comment.status" class="status true">Publish</span>
                    <span v-else class="status false">Hiden</span>
                </td>

              <td><span @click="changeComment(comment.id)" class="link">Change Status</span></td>
              <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>

          </tr>
      </tbody>
  </CommentTable>

</template>

<script>
import CommentTable from '@/components/admin/CommentTable.vue'
export default {

components: {
    CommentTable
},

layout:'admin',
    data() {
        return {
                comments: [
                    {id:1,name:'alex', text:"lorem lorem lorem", status:true},
                    {id:2,name:'saha', text:"lorem lorem lorem222",status:false}
                ]
        }
    },

methods: {

    changeComment(id) {
        
        console.log(`change comment id - ${id}`)
    },

    deleteComment(id) {
        
        console.log(`delete comment id - ${id}`)
    }
}
}
</script>

<style>

</style>