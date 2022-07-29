<template>
  <div class="flex flex-col justify-center items-center pt-24 pb-44 bg-signup">
    <div :class="{'hidden':nothide,'bg-green-300':signUp,'bg-red-300':!signUp}" class='  text-center p-4 mb-2 backdrop-blur-sm backdrop-grayscale w-2/4'>
      <p class='font-mikh text-md  '>
        {{notftext}}
      </p>
    </div>
      <div class='bg-gray-100 opacity-90 backdrop-blur-xl shadow-sm shaddow-white w-2/4 p-4 border-t-8 border-b-8 border-green-500  text-center'>
        <p class='text-center font-Bmikh text-green-500 mb-2 text-2xl'>ثبت نام</p>
        <label for="password" class='font-mikh text-center text-sm'>نام</label>
        <input type='text' id='fname' class='outline-none w-3/4 bg-white border-2 p-2 mb-2 rounded-md font-mikh block mx-auto focus:border-green-500 focus:bg-gray-100 focus:shadow-sm'/>
        <label for="username" class='font-mikh text-center text-sm'>نام کاربری:</label>
        <input type='text' id='username' class='outline-none w-3/4 mb-2 bg-white border-2 p-2 rounded-md font-mikh block mx-auto focus:border-green-500 focus:bg-gray-100 focus:shadow-sm'/>
        <label for="password" class='font-mikh text-center text-sm'>رمز عبور:</label>
        <input type='password' id='password' class='outline-none w-3/4 bg-white border-2 p-2 mb-2 rounded-md font-mikh block mx-auto focus:border-green-500 focus:bg-gray-100 focus:shadow-sm'/>
        <label for="password" class='font-mikh text-center text-sm'>ایمیل:</label>
        <input type='text' id='email' class='outline-none w-3/4 bg-white border-2 p-2 mb-2 rounded-md font-mikh block mx-auto focus:border-green-500 focus:bg-gray-100 focus:shadow-sm'/>
        <label for="password" class='font-mikh text-center text-sm'>استان:</label>
        <input type='text' id='state' class='outline-none w-3/4 bg-white border-2 p-2 mb-2 rounded-md font-mikh block mx-auto focus:border-green-500 focus:bg-gray-100 focus:shadow-sm'/>
        <label for="password" class='font-mikh text-center text-sm'>شهر:</label>
        <input type='text' id='city' class='outline-none w-3/4 bg-white border-2 p-2 mb-8 rounded-md font-mikh block mx-auto focus:border-green-500 focus:bg-gray-100 focus:shadow-sm'/>

        <input type='submit' @click='signup' value="ثبت نام" class='outline-none w-3/4 bg-transparent border-2 border-green-500 text-green-500 p-2 rounded-md font-mikh block mx-auto focus:border-transparent  font-Bmikh focus:bg-green-500 focus:text-gray-100 focus:shadow-sm'/>
        <p class='font-mikh mt-4'>اکانت داری؟<router-link to='/signin' class='text-green-500'>وارد شوید</router-link></p>
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
    var signUp = ref(true)
    var router = useRouter()
    var notftext = ref("شما باموفقیت وارد شدی")
    function signup() {
      var username = document.getElementById('username').value
      var password = document.getElementById('password').value
      var allname = document.getElementById('fname').value
      var email = document.getElementById('email').value
      var state = document.getElementById('state').value
      var city = document.getElementById('city').value
      var reqdata = {
        method:"signUp",
        data:JSON.stringify({
          "username":username,
          "password":password,
          "name":allname,
          "email":email,
          "state":state,
          "city":city
        })
      }
      axios.post('https://api.nightcode.ml/api/user',null,{params:reqdata})
      .then((resp)=>{
        if(resp.data.auth){
          nothide.value = false
          signUp.value = true
          notftext.value = 'شما با موفقیت ثبت نام کردی'
          sessionStorage.setItem('auth','true')
          sessionStorage.setItem('username',username)
          router.push('/panel')
        }else{
          nothide.value = false
          signUp.value = false
          if(resp.data.err == 'username not avialable'){
          notftext.value = 'این نام کاربری ازاد نیست'
          sessionStorage.setItem('auth','false')
          }else if(resp.data.err == 'blocked char'){
            notftext.value = 'شمااز کاراکتر های ممنوع استفاده کردید ,لطفا بعد اصلاح اطلاعات وارد شده دوباره تلاش نمایید'
           sessionStorage.setItem('auth','false')
          }else{
            notftext.value = 'ثبت نام با شکست برخورد'
            sessionStorage.setItem('auth','false')
          }
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    return {signUp,nothide,notftext,signup}
  }
}
</script>

<style>
.bg-signup{
  background-image:url('../../assets/bg2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>