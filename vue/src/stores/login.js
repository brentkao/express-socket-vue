import { ref } from 'vue'
import { defineStore } from 'pinia'
import { socket } from '../socket.js';


export const useLogin = defineStore('login', () => {
  const admin_uid = ref('');
  const login = (account, password) => {
    socket.emit("login", { account, password });
  }

  return {
    admin_uid,
    login,
  }
});


