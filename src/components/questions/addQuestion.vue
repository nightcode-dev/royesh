<template>
  <div v-show='logined' class='w-screen h-screen flex flex-col items-start p-2 pt-4'>
    <div :class="{'hidden':nothide,'bg-green-300':inserted,'bg-red-300':!inserted}" class='w-2/6 text-center p-4 mb-2 backdrop-blur-sm backdrop-grayscale w-2/4'>
      <p class='font-mikh text-md  '>
        {{notftext}}
      </p>
    </div>
      <h1 class='font-Dmikh text-right text-green-500 text-xl'>افزودن سوال</h1>
      <div class='flex w-full flex-col items-start font-mikh mt-2'>
          <label for='qtitle'>عنوان سوال</label>
          <input type='text' id='titleinp' class='bg-white w-3/4 outline-none border-green-500 border-2 font-mikh p-1 mt-1 rounded-md hover:bg-gray-100' placeholder="عنوان سوال خود را وارد کنید">
      </div>
      <div class='flex w-full flex-col items-start font-mikh mt-2'>
          <label for='qtitle'>توضیح سوال</label>
          <div contenteditable="true" id='descinp' class='bg-white w-3/4 outline-none border-green-500 border-2 font-mikh p-1 mt-2 rounded-md hover:bg-gray-100'></div>
      </div>
      <div class='flex w-full flex-col items-start font-mikh mt-2'>
          <label for='qtitle'>تگ ها</label>
          <div class='mb-2 mt-2 bg-gray-100 font-mikh text-gray-400 flex p-1 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
</svg>
            <span>
                تگ ها مقادیری هستند که موضوع سوال شما با انها ارزیابی می شود پس در وارد کردن انها دقت کنید در ضمن تگ ها را با - جدا کنید
            </span>
          </div>
          <input type='text' id='tagsinp' class='bg-white w-3/4 outline-none border-green-500 border-2 font-mikh p-1 mt-1 rounded-md hover:bg-gray-100' placeholder="عنوان سوال خود را وارد کنید">
      </div>
      <button @click="subQues" class='border-2 w-28 font-mikh border-green-500 p-1 mt-4 rounded-md bg-green-500 text-white flex justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
</svg>
        <span class='mr-1'>ثبت سوال</span>
      </button>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
    setup(){
    var nothide = ref(true)
    var inserted = ref(true)
    var notftext = ref("شما باموفقیت وارد شدی")  
    var logined = ref(false)
    function chlog(){
      if(sessionStorage.getItem('auth')){
        logined.value = true
      }else{
        var router = useRouter()
        router.push('/signin')
      }
    }
    chlog()
        function subQues() {
      var date = new Date()
      var dtopt = {
        year:"numeric",
        month:"long",
        day:"numeric"
      }
      var now = date.toLocaleDateString('fa-IR',dtopt)
      var author = sessionStorage.getItem('username')
      var title = document.getElementById('titleinp').value
      var desc = document.getElementById('descinp').innerHTML
      var tags = document.getElementById('tagsinp').value
      axios.post('https://api.nightcode.ml/api/ask',null,{
        params:{
          method:'addQuestion',
          data:JSON.stringify({
            "title":title,
            "author":author,
            "date":now,
            "desc":desc,
            "tags":tags
          })
        }
      })
      .then(resp =>{
        if(resp.data.inserted){
        nothide.value = false
          inserted.value = true
          notftext.value = 'سوال شما ثبت شد!'
        }else{
          if(resp.data.err == 'blocked char'){
            nothide.value = false
            inserted.value = false
            notftext.value = 'شما از کاراکترهای ممنوعه استفاده کرده اید!لطفا بعد از اصلاح اطلاعات دوباره تلاش نمایید'
          }else{
            nothide.value = false
            inserted.value = false
            notftext.value = 'ثبت سوال شما با مشکل مواجه شد'
          }
        }
        setTimeout(()=>{
            nothide.value = true
          },2000)
      })
    }
        return {nothide,inserted,notftext,subQues,logined}
    }
}
</script>

<style>

</style>