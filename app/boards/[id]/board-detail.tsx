'use client';
import { Board } from "@/models/board-model";
import { useState, useEffect } from "react";
import { socket } from '@/socket';

export default function BoardDetail({params}: {params: {id: string}} ) {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [transport, setTransport] = useState("N/A");
    
    useEffect(() => {
     

        function onConnected() {
            console.log('Socket.io connection established!')
            setIsConnected(true);
            setTransport(socket.io.engine.transport.name);

            socket.io.engine.on("upgrade", (transport) => {
                setTransport(transport.name);
            });
        }

        function onDisconnect() {
            console.log('Socket.io connection closed!')
            setIsConnected(false);
        }

        socket.on('connect', onConnected);
        socket.on('disconnect', onDisconnect);
        return () => {
            socket.off('connect', onConnected);
            socket.off('disconnect', onDisconnect);
        }

    }, [params.id]);

    return (
        <>
            <section>
                <span>{params.id}</span>
                <br></br>
                <span>
                    Status: {isConnected ? 'connected' : 'disconnected'}
                </span>
                <p>Transport: {transport}</p>
            </section>
        </>
    );
}