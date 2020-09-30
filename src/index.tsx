import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/store';
import Peer from 'peerjs';
import { Message } from './constants/types';
import {actions} from './features/MainPage/ducks'

const peer =  new Peer({ host: "peerjs.92k.de", secure: true })
let conn : any
let myId: string|null = null
let connections: any =[]

peer.on('open', function(id){
    console.log('myid = ',id)
    myId = id
});     

function getMyId(){
    return myId
}

function ConnectToPeer(peerId:string)
{
    console.log(peerId);
    conn = peer.connect(peerId);


    peer.on('error', function(err){
        console.log('error');
    });

};

peer.on('connection', function(conn) 
{ 
    console.log('peer connected');
    conn.on('open', function() {
        console.log('conn open');
        conn.on('data', function(data) {
          console.log(data);
       store.dispatch( actions.setMessage(data))
      });
    });
});


function SendMessage(message:Message)
{
    if(peer.connections)
        
        Object.keys(peer.connections).forEach((conn:any)=> {
            peer.connections[conn][peer.connections[conn].length-1].send(message);
        });
    else
        conn.send(message);
};

ReactDOM.render(
    <Provider store ={store} ><App connectToPeer={ConnectToPeer} sendMessage={SendMessage} getMyId={getMyId}/></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
