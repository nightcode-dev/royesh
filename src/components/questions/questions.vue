<template>
  <div>
    <div class='flex lg:flex-row flex-col-reverse w-full pt-1 h-full'>
      <div class="lg:w-4/6 p-4">
        <div v-for='(question,id) in questions' :key='id' class='w-full mb-2 flex flex-col justify-start'>
          <div class='w-full '>
            <router-link :to="`/q/${question.id}`"><h1 class='font-Bmikh pb-2 text-lg text-green-500'>{{question.title}}</h1></router-link>
            <p class='font-mikh '>{{question.description.slice(0,300)}}...</p>
          </div>
          <div class='flex justify-around pt-2'>
            <div class='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
<p class='font-mikh text-sm'>{{question.q_date}}</p>
</div>
            <div class='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
<p class='font-mikh text-sm text-green-500'>{{question.author}}</p>
</div>
          </div>
          <hr class='bg-gray-100'>
        </div>
      </div>
      <div class='lg:w-2/6 border-r-2 flex flex-col items-center border-gray-100 p-4 bg-gray-50'>
        <button @click="goAddQues" class='border-2 border-green-500 p-2 font-mikh text-green-500 flex rounded-md w-3/4 mb-4 font-bold justify-center hover:bg-green-500 hover:text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p>افزودن سوال</p>
        </button>
        <div class='flex items-center '>
          <input type='search' id='searchbox' placeholder="سوال مورد نظر خود را از طریق تگ ها پیدا کنید" class='outline-none w-3/4 bg-white border-2 p-2 rounded-md font-mikh focus:border-green-500 focus:bg-gray-100 focus:shadow-sm'/>
          <button type="submit" @click='searching' class="mr-2 bg-green-500 w-10 h-10 p-2 rounded-md"><svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import {ref} from 'vue'
 import  axios  from 'axios'
import { useRouter } from 'vue-router'
export default {
    setup(){
        var questions = ref([])
        var router = useRouter()
        async function getQues() {
          axios.post('https://api.nightcode.ml/api/ask',null,{
            params:{
              method:'questions'
            }
          })
          .then((resp)=>{
            questions.value = resp.data
          })
          .catch((err)=>{
            console.log(err)
          })
        }
        function searching() {
          var searchBox = document.getElementById('searchbox')
          axios.post('https://api.nightcode.ml/api/ask',null,{
            params:{
              method:'search',
              data:{"search":searchBox.value}
            }
          })
          .then((resp)=>{
            if(!resp.data.err){
            questions.value = resp.data
            }else{
              questions.value = []
            }
          })
          .catch((err)=>{
            console.log(err)
          })
        }
        function goAddQues() {
          router.push('/q/addQuestion')
        }
        getQues()
        return {questions,searching,goAddQues}
    }
}
</script>

<style>

</style>