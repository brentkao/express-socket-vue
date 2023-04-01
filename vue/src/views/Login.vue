<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { socket } from '../socket.js';
import { useHome } from '../stores/home';
import { useLogin } from '../stores/login';


const router = useRouter();

const loginPinia = useLogin();
const { login, admin_uid } = loginPinia;

const homePinia = useHome();
const { info } = homePinia;


let account = ref("");
let password = ref("");


socket.on("login-response", (res) => {
  console.log("login-response",res);
  const { code, msg, data } = res;

  //! Fail
  if(code !== "lg-0001"){ 
    console.log("Login Fail", msg); 
  }
  
  //! Success
  loginPinia.admin_uid = data?.uid;
  info.title = data?.title;
  info.content = data?.content;
  router.push('/home');
});


</script>

<template>
  <div class="container">
    <img class="pz_logo img_setting" src="../assets/img/logo.tif" alt="ParaZeni">
    <div class="inputAndBtn">
      <div class="inputContainer">
        <div class="inputBox">
          <label for="account">Account:</label>
          <input type="text" id="account" v-model="account">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password">
        </div>
      </div>
      <div class="btnContainer">
        <button @click="login(account,password)">Sign In</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.pz_logo {
  position: absolute;
  top: size(149);
  left: size(387);
  // width: size(1060);
  height: 100%;
}
.inputBox{
  display: flex;
  flex-flow:column wrap;
  justify-content: space-between;

}

.inputAndBtn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.inputContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: size(340);
  height: size(108);
  color: white;
}

.inputContainer input {
  margin-left: size(32);
  width: size(228);
  height: size(40);
  border-radius: size(4);
}

.btnContainer {
  width: size(94);
  height: size(108);
  margin: 20px;
}

.btnContainer button {
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 24px;
  line-height: 22px;
}
</style>