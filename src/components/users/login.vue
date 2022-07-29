<template>
  <div class="flex flex-col bg-login bk-login justify-center items-center pt-44 h-screen shadow-xl">
    <div :class="{'hidden':nothide,'bg-green-300':logined,'bg-red-300':!logined}" class='  text-center p-4 mb-2 backdrop-blur-sm backdrop-grayscale w-2/4'>
      <p class='font-mikh text-md  '>
        {{notftext}}
      </p>
    </div>
      <div class='bg-gray-100 opacity-90 backdrop-blur-xl shadow-sm shaddow-white lg:w-2/4 w-3/4 p-4 border-t-8 border-b-8 border-green-500 text-center'>
        <p class='text-center font-Bmikh text-green-500 mb-2 text-2xl'>ورود</p>
        <label for="username" class='font-mikh text-center text-sm'>نام کاربری:</label>
        <input type='text' id='username' class='outline-none w-3/4 mb-2 bg-white border-2 p-2 rounded-md font-mikh block mx-auto focus:border-green-500 focus:bg-gray-100 focus:shadow-sm'/>
        <label for="password" class='font-mikh text-center text-sm'>رمز عبور:</label>
        <input type='password' id='password' class='outline-none w-3/4 bg-white border-2 p-2 mb-2 rounded-md font-mikh block mx-auto focus:border-green-500 focus:bg-gray-100 focus:shadow-sm'/>
        
        <input type='submit' @click='login' value="ورود" class='outline-none w-3/4 bg-transparent border-2 border-green-500 text-green-500 p-2 rounded-md font-mikh block mx-auto focus:border-transparent  font-Bmikh focus:bg-green-500 focus:text-gray-100 focus:shadow-sm'/>
        <p class='font-mikh mt-4'>اکانت نداری؟<router-link to='/signup' class='text-green-500'>ثبت نام کن</router-link></p>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import axios from 'axios'
import { useRouter } from 'vue-router'
export default {
  setup(){
    var nothide = ref(true)
    var logined = ref(true)
    var notftext = ref("شما باموفقیت وارد شدی")
    var router = useRouter()
    function login() {
      var username = document.getElementById('username').value
      var password = document.getElementById('password').value
      var reqdata = {
        method:"login",
        data:JSON.stringify({
          "username":username,
          "password":password
        })
      }
      axios.post('https://api.nightcode.ml/api/user',null,{params:reqdata})
      .then((resp)=>{
        if(resp.data.auth){
          nothide.value = false
          logined.value = true
          notftext.value = 'شما با موفقیت وارد شدی'
          sessionStorage.setItem('auth','true')
          sessionStorage.setItem('username',resp.data.data[0].username)
          router.push('/panel')
        }else{
          nothide.value = false
          logined.value = false
          sessionStorage.setItem('auth','false')
          if(resp.data.err == 'blocked char'){
            notftext.value = 'شمااز کاراکتر های ممنوع استفاده کردید ,لطفا بعد اصلاح اطلاعات وارد شده دوباره تلاش نمایید'
          }
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    return {nothide,logined,notftext,login}
  }
}
</script>

<style>
.bg-login{
  background-image:url('../../assets/bg1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>