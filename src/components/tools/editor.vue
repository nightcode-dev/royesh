<template>
  <div class='flex flex-col w-5/6'>
  <div :class="{'hidden':nothide,'bg-green-300':inserted,'bg-red-300':!inserted}" class='w-full text-center p-4 mb-2 backdrop-blur-sm backdrop-grayscale w-2/4'>
      <p class='font-mikh text-md  '>
        {{notftext}}
      </p>
    </div>
      <div contenteditable="true" id="editor" class='w-full border-2 outline-none font-mikh bg-gray-100 p-2 rounded-md mb-2 focus:bg-white focus:border-green-500'></div>
      <button @click='submitAnswer' class="font-mikh font-bold p-1 rounded-md border-t-0 text-center text-white flex justify-center border-2 bg-green-500 border-green-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg>ثبت پاسخ</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup(props,ctx){
    var nothide = ref(true)
    var inserted = ref(true)
    var notftext = ref("شما باموفقیت وارد شدی")
    var route = useRoute()
    function submitAnswer() {
      var date = new Date()
      var dtopt = {
        year:"numeric",
        month:"long",
        day:"numeric"
      }
      var now = date.toLocaleDateString('fa-IR',dtopt)
      var author = sessionStorage.getItem('username')
      var qid = route.params.id
      var desc = document.getElementById('editor').innerHTML
      axios.post('https://api.nightcode.ml/api/ask',null,{
        params:{
          method:'addAnswer',
          data:JSON.stringify({
            "qid":qid,
            "author":author,
            "date":now,
            "desc":desc
          })
        }
      })
      .then(resp =>{
        if(resp.data.inserted){
          nothide.value = false
          inserted.value = true
          notftext.value = 'پاسخ شما ثبت شد!'
          setTimeout(()=>{
            nothide.value = true
          },2000)
          ctx.emit('insert')
        }
      })
    }
    return {inserted,nothide,submitAnswer,notftext}
  }
}
</script>

<style>

</style>