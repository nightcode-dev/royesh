<template>
<div class='bg-white flex lg:flex-row flex-col-reverse'>
  <div class="lg:w-2/6 h-screen border-t-2 lg:border-l-2 flex flex-col items-center border-gray-200 p-4 bg-gray-100">
  <editor @shLink="doShLink" @insert='getAns'></editor>
  </div>
  <div class="lg:w-4/6 bg-white p-4 lg:shadow-xl">
    <div class='flex'>
    <h1 class='font-Dmikh text-xl text-green-500 text-right ml-2'>{{ question.title }}</h1>
    </div>
    <div class='w-full flex justify-start mt-4'>
      <div class='flex ml-8'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class='font-mikh'>{{ question.author }}</p>
      </div>
      <div class='flex ml-8'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      <p class='font-mikh'>{{ question.q_date }}</p>
      </div>
      <div class='flex ml-8'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
        <p class='font-mikh'>{{ question.status }}</p>
      </div>
    </div>
    <hr class='bg-green-500 w-full mt-2' />
    <p class='font-mikh text-right mt-2'>{{ question.description }}</p>
    <div class='mr-2 flex justify-start mt-2 p-2'>
    <div v-for='(tag,tid) in tags' :key='tid' class=' p-1.5 text-center font-bold text-sm font-mikh text-green-400 ml-2 bg-green-100 rounded-md'>{{ tag }}</div>
  </div>
    <hr class='bg-green-500 w-full mt-2' />
    <div v-for='(answer,aid) in answers' :key='aid' class='mt-2 border-r-4 border-green-500 mr-4 p-2 bg-gray-200'>
      <div class='w-full flex justify-start mt-2 mb-2'>
      <div class='flex ml-8'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class='font-mikh'>{{ answer.author }}</p>
      </div>
      <div class='flex ml-8'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      <p class='font-mikh'>{{ answer.answer_date }}</p>
      </div>
    </div>
    <p class='text-right  font-mikh'>{{ answer.descy }}</p>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from '@vue/runtime-core'
import editor from'../tools/editor.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

export default {
  components:{
    editor
  },
  setup(){
    var route = useRoute()
    var question = ref(null)
    var tags = ref(null)
    var answers = ref(null)
    async function getAns(){
      axios.post('https://api.nightcode.ml/api/ask',null,{
            params:{
              method:'answers',
              data:JSON.stringify({
                "id":route.params.id
              })
            }
          })
          .then((resp)=>{
            answers.value = resp.data
          })
          .catch((err)=>{
            console.log(err)
          })
    }
    async function getQues(){
      axios.post('https://api.nightcode.ml/api/ask',null,{
            params:{
              method:'question',
              data:JSON.stringify({
                "id":route.params.id
              })
            }
          })
          .then((resp)=>{
            question.value = resp.data[0]
            tags.value = resp.data[0].tag.split('-')
            getAns()
          })
          .catch((err)=>{
            console.log(err)
          })
    }
    getQues()
    return{question,tags,answers}
  }
}
</script>

<style>

</style>