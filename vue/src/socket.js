
import { io } from "socket.io-client";


export const socket = io('https://v-openapi.zeabur.app',
    {
        path: '',
        transports: ['websocket', 'xhr-polling', 'jsonp-polling']
    })
    
socket.on("connect", (res) => {
    console.log("#connect: ", res);
});
socket.on("message", (res) => {
    console.log("#message: ", res);
});
socket.on('disconnect', () => {
    console.log('断开连接')
})

