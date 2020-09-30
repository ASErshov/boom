import React from 'react';
import MainPage, { MainPageProps } from './features/MainPage';


const App: React.FC<MainPageProps> = ({connectToPeer, sendMessage, getMyId})=>{

  return (
    <MainPage connectToPeer={connectToPeer} sendMessage={sendMessage} getMyId={getMyId}/>
  );
}

export default App;
