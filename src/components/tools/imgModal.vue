<template>
  <div class='fixed inset-0 bg-opacity-50 bg-green-500 flex justify-center items-center'>
    <div class="bg-gradient-to-br from-white to-gray-200 rounded-md shadow-2xl w-2/4 p-4 flex flex-col items-center">
      <h1 class="font-Dmikh text-green-500 text-center">افزودن عکس</h1>
      <div class='flex flex-col items-center w-full mt-4'>
        <div class='flex flex-col p-2 items-center'>
          <form enctype="multipart/form-data" class='flex flex-col items-center'>
          <input type='file' id='upload' name="imgUpload" ref="imgUpload" @change='sendFile' class="hidden">
          <p class='font-mikh text-green-500 mb-2 text-center'>{{ fileName }}</p>
          <label for='upload' class='font-mikh m-2 text-green-500 border-2 border-green-500 p-1 rounded-md hover:bg-green-500 hover:text-white'>انتخاب عکس</label>
          </form>
        </div>
        <div class="flex flex-col items-center p-2">
          <img :src='imgUrl' v-if="imgUrl !== ''" class='w-1/4 h-1/4'>
          <label class='font-mikh text-center mt-2'>لینک</label>
          <input type='text' class="outline-none border-2 w-3/4 rounded-lg p-2" v-model="imgUrl" readonly>
        </div>
      </div>
      <div>
        <button @click="eCloseImg" class="border-2 border-green-500 duration-200  text-green-500 p-1 mt-4 rounded-md font-mikh hover:text-white hover:bg-green-500">بستن</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import  axios from 'axios' 
import { watch } from '@vue/runtime-core'

export default {
    setup(props,ctx){
      var imgUpload = ref(null)
      var htmlcode = ref('')
      var fileName = ref("هیچ فایلی انتخاب نشده است")
      var imgUrl = ref('')
      function sendFile() {
        var formFile = new FormData();
        formFile.append('img',imgUpload.value.files[0])
       axios.post('https://api.nightcode.ml/api/ask',formFile,{
            params:{
              method:'upload'
            },
            headers:{
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((resp)=>{
            fileName.value = resp.data.data.fileName
            imgUrl.value = resp.data.data.link
          })
          .catch((err)=>{
            console.log(err)
            
          })
      }

      watch(imgUrl,(newImg) => {
        var html = `<img src="${newImg}" class="w-1/4 h-1/4">`
        htmlcode.value = html
      })

      function eCloseImg(){
        ctx.emit('closeImg')
      }
      return {eCloseImg,imgUpload,htmlcode,sendFile,imgUrl,fileName}
    }
}
</script>

<style>

</style>