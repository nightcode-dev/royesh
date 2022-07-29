<template>
  <div class='fixed inset-0 bg-opacity-50 bg-green-500 flex justify-center items-center'>
    <div class="bg-gradient-to-br from-white to-gray-200 rounded-md shadow-2xl w-2/4 p-4 flex flex-col items-center">
      <h1 class="font-Dmikh text-green-500 text-center">ساخت لینک</h1>
      <div class='flex flex-col items-center w-full mt-4'>
        <label class='font-mikh text-center'>رمز عبور قدیمی</label>
        <input type='text' placeholder="متن مورد نظر خود را برای لینک انتخاب کنید" v-model="oldpass" class="outline-none font-mikh border-2 w-3/4 rounded-lg p-2 focus:shadow-md focus:border-green-500 focus:bg-gray-100">
        <label class='font-mikh text-center mt-2'>رمز عبور</label>
        <input type='password' placeholder="لینک مورد نظر خود را وارد کنید" v-model="newpass" class="outline-none font-mikh border-2 w-3/4 rounded-lg p-2 focus:shadow-md focus:border-green-500 focus:bg-gray-100">
        <br>
        <button @click="chPass" class='border-2 font-mikh border-green-500 p-1 mt-4 rounded-md bg-green-500 text-white flex justify-center'>
       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
</svg>
        <span class='mr-1'>تغییر رمزعبور</span>
      </button>
      </div>
      <div>
        <button @click="closePass" class="border-2 border-green-500 duration-200  text-green-500 p-1 mt-4 rounded-md font-mikh hover:text-white hover:bg-green-500">بستن</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(props,ctx){
      var oldpass = ref('')
      var newpass = ref('')
      function closePass(){
        ctx.emit('closepass')
      }
      return {oldpass,newpass,closePass}
    }
}
</script>

<style>

</style>