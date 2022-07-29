<template>
  <div class="flex lg:flex-row flex-col-reverse w-full pt-1 h-full">
    <div class='lg:w-3/6 border-t-2 lg:border-t-0 lg:border-l-2 flex flex-col border-gray-200 p-4 bg-gray-100'>
        <div class='flex flex-col items-center'>
            <div :class="{'hidden':nothide,'bg-green-300':inserted,'bg-red-300':!inserted}" class='w-full text-center p-4 mb-2 backdrop-blur-sm backdrop-grayscale w-2/4'>
      <p class='font-mikh text-md  '>
        {{notftext}}
      </p>
    </div>
            <label class='font-mikh text-green-500'>مفید بود؟</label>
            <select id="fayde" class='border-2 rounded-md font-mikh w-3/6 outline-none mb-2'>
                <option v-for="(text,tid) in fopt" :key="tid" :value="text">{{ text }}</option>
            </select>
            <label class='font-mikh text-green-500'>نظر شما:</label>
          <div contenteditable="true" id='descinp' class='bg-white w-3/4 mb-2 outline-none border-green-500 border-2 font-mikh p-1 mt-2 rounded-md'></div>
          <button @click="subCom" class="font-mikh font-bold p-1 rounded-md border-t-0 text-center text-white flex justify-center border-2 bg-green-500 border-green-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg>ثبت نظر</button>
<hr class='bg-green-500 w-full mt-2' />
        </div>
        <div v-for='(comment,cid) in comments' :key='cid' class='mt-2 border-r-4 border-green-500 mr-4 p-2 bg-gray-200'>
      <div class='w-full flex justify-start mt-2 mb-2'>
      <div class='flex ml-8'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class='font-mikh'>{{comment.author }}</p>
      </div>
      <div class='flex ml-8'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      <p class='font-mikh'>{{ comment.com_date }}</p>
      </div>
      <div class='flex ml-8'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>
      <p class='font-mikh'>{{ comment.rate }}</p>
      </div>
    </div>
    <p class='text-right  font-mikh'>{{ comment.descy }}</p>
    </div>
    </div>
    <div class='lg:w-3/6 flex flex-col items-center p-4' v-for="(arti,aid) in art" :key="aid">
        <h1 class='text-green-500 font-Bmikh text-xl mb-2'>{{ arti.title }}</h1>
        <img :src='arti.imgLink' class='w-5/6 h-2/6 mt-2 rounded-md'>
        <div class=' flex items-center mt-4 mb-4'>
            <div class='flex p-1.5 text-center font-bold text-sm items-center font-mikh text-gray-400 ml-2 bg-gray-100 rounded-md'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
<p class='mr-1'>{{ arti.art_date }}</p>
    </div>
    <div class='flex p-1.5 text-center font-bold text-sm items-center font-mikh text-gray-400 ml-2 bg-gray-100 rounded-md'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p class='mr-1'>{{ arti.author }}</p>
    </div>
        </div>
        <p class='w-5/6 font-mikh text-right'>{{ arti.descy }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import axios from 'axios'
import { useRoute } from 'vue-router'
export default {
    setup(){
        var nothide = ref(true)
        var inserted = ref(true)
        var notftext = ref("شما باموفقیت وارد شدی")
        var art = ref()
        var comments = ref()
        var fopt = ['نه','تقریبا','کاملا']
        var route = useRoute()
        async function getCom(){
      axios.post('https://api.nightcode.ml/api/blog',null,{
            params:{
              method:'comments',
              data:JSON.stringify({
                "id":route.params.id
              })
            }
          })
          .then((resp)=>{
            comments.value = resp.data
          })
          .catch((err)=>{
            console.log(err)
          })
    }
    function subCom() {
      var date = new Date()
      var dtopt = {
        year:"numeric",
        month:"long",
        day:"numeric"
      }
      var now = date.toLocaleDateString('fa-IR',dtopt)
      var author = sessionStorage.getItem('username')
      var qid = route.params.id
      var desc = document.getElementById('descinp').innerHTML
      var rate = document.getElementById('fayde').value
      axios.post('https://api.nightcode.ml/api/blog',null,{
        params:{
          method:'addCom',
          data:JSON.stringify({
            "qid":qid,
            "author":author,
            "date":now,
            "desc":desc,
            "rate":rate,
            "targ":"a"
          })
        }
      })
      .then(resp =>{
        if(resp.data.inserted){
          nothide.value = false
          inserted.value = true
          notftext.value = 'نظر شما ثبت شد!'
        }else{
          nothide.value = false
          inserted.value = false
          if(resp.data.err == 'blocked char'){
            notftext.value = 'شما از کاراکنرهای ممنوعه استفاده کردید!لطفا بعد از اصلاح اطلاعات وارد شده دوباره تلاش نماید'
          }else{
            notftext.value = 'ثبت نظر شما با خطا رو به رو شد'
          }
        }
        setTimeout(()=>{
            nothide.value = true
          },2000)
      })
    }
        async function getArt() {
            axios.post('https://api.nightcode.ml/api/blog',null,{
            params:{
              method:'art',
              data:JSON.stringify({
                "id":route.params.id
              })
            }
          })
          .then((resp)=>{
            art.value = resp.data
            getCom()
          })
          .catch((err)=>{
            console.log(err)
          })
        }
        getArt()
        return {fopt,art,comments,subCom,nothide,notftext,inserted}
    }
}
</script>

<style>

</style>