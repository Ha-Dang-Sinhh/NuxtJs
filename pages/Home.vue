<template>
  <form @submit.prevent="AddPost()">
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
      <div class="container mb-2 flex mx-auto w-full items-center justify-center" v-for="(item, index) in dataMessage">
        <ul class="flex flex-col p-4">
          <li class="border-gray-400 flex flex-row">
            <div
              class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400"
            >
              <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">
                  {{item.title}}
                </div>
                <div class="font-medium">
                  {{item.content}}
                </div>
              </div>
              <nuxt-link :to="{ name: 'Edit', query: { id: item.id }}">
                <button class="w-[70px] text-wrap text-center flex text-white text-bold flex-col rounded-md bg-blue-500 justify-center items-center mr-10 p-2">Edit</button>
              </nuxt-link>
              <div class="w-[70px] text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2" @click="deleteNote(item.id)">
                Delete
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </form>
</template>

<script>

import { db } from "../plugins/firebase";
import {getStorage, uploadBytes, ref, getDownloadURL} from "firebase/storage";
import { collection, getDocs, deleteDoc, doc, onSnapshot, getDoc, query, where, addDoc,orderBy, limit,} from 'firebase/firestore';

export default {
  name: "Home.vue",
  data() {
    return {
      slug: null,
      title:"",
      content:"",
      dataMessage:[],
    }
  },

  methods: {
    async getNotes(){
        let unSub = null;
        const collectionRef = collection(db, 'todos');
        unSub = onSnapshot(collectionRef, (snapShot) => {
            const localMessage = [];
            console.log(snapShot);
            snapShot.forEach(doc => {
                localMessage.push({
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content,
                });
            });
            this.dataMessage = localMessage;
        });
    },
    async AddPost(){

      if (!this.title) {
        alert("Nhập title vào rồi hãy submit bạn ơi");
        return;
      }else if(!this.content){
        alert("Nhập content vào rồi hãy submit bạn ơi");
        return;
      }

      const collectionRef = collection(db, 'todos');
      try {
        await addDoc(collectionRef, {
          title: this.title,
          content: this.content,
        });
        this.title = "",
        this.content = "",
        alert("add thành công !")
      } catch (e) {
        console.log(e);
        alert("add thất bại !")
      }
    },
    async deleteNote(id){
      const docRef = doc(db, 'todos', id);
      await deleteDoc(docRef);
    }
  },
  mounted() {
      this.getNotes();
  },
}
</script>

<style scoped>

</style>
