import { ref } from 'vue'
import { defineStore } from 'pinia'
import { socket } from '../socket.js';


export const useHome = defineStore('home', () => {
    const info = ref({
        title:  "",
        content:  ""
    });

    return {
        info,
    }
});