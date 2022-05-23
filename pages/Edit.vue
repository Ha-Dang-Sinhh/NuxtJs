<template>
  <form @submit.prevent="EditPost()">
    <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
      <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
        <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">ADD POST</h1>
        <div class="space-y-4">
          <div>
            <label for="title" class="text-lx font-serif">Title:</label>
            <input type="text" placeholder="title" v-model="title" id="title" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
          </div>
          <div>
            <label for="content" class="text-lx font-serif">Content:</label>
            <input type="text" placeholder="content" v-model="content" id="content" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
          </div>
          <button class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600 " >ADD POST</button>
        </div>
      </div>
    </div>

  </form>
</template>

<script>
import {db} from "../plugins/firebase";
import { collection, getDocs, deleteDoc, doc, onSnapshot, getDoc, query, where,updateDoc, addDoc,orderBy, limit,} from 'firebase/firestore';
export default {
  name: "Edit.vue",
  data() {
    return {
      slug: null,
      title:"",
      content:"",
    }
  },
  methods:{
    async getNote(){
      const docRef = doc(db, 'todos', this.$route.params.id);
      const docSnapshot = await getDoc(docRef);
      this.title = docSnapshot.data().title;
      this.content = docSnapshot.data().content;
    },
    async EditPost(){
      const docRef = doc(db, 'todos', this.$route.params.id);
      await updateDoc(docRef, { title:this.title,content:this.content });
      alert("Edit thành công");
    }
  },
  created() {
    console.log(this.$route.params.id)
  },
  mounted() {
    this.getNote();
  }
}
</script>

<style scoped>

</style>
