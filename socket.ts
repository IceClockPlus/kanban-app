import { io } from "socket.io-client";

const URL = 'http://localhost:5390';
export const socket = io(URL, {
    transportOptions: ['polling']
});