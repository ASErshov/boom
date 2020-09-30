import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';

import styles from './MainPage.module.css';
import headLogo from '../../assets/png/icon.png'
import CustomModal from '../../components/CustomModal';
import SearchInput from '../../components/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from './ducks'
import { getHostKey, getConnected, getMessage, getHostMessage } from './ducks/selectors';
import { Message } from '../../constants/types';
import { Button } from '@material-ui/core';
import CardBacground from '../../components/CardBackground';


export type MainPageProps= {
  connectToPeer(id:string):void
  sendMessage(message: Message):void
  getMyId(): string|null
}


const logo = (className: string):React.ReactElement =>{
  return(
    <img className={className} src={headLogo} alt='none logo'/>
  )
}

const MainPage: React.FC<MainPageProps>=({connectToPeer, sendMessage, getMyId}): React.ReactElement =>{

  const dispatch = useDispatch()

  const hostId = useSelector(getHostKey)
  const connected = useSelector(getConnected)
  const message = useSelector(getMessage)
  const hostMessage = useSelector(getHostMessage)

  const [isHost, setIsHost] =useState(false)
  
  useEffect(()=>{
    if(isHost && message && message.id && connected.findIndex((item)=>item.id===message.id)){
      dispatch(actions.setConnect({id: message.id, name: message.name}))
      connectToPeer(message.id)
      setTimeout(()=>{sendMessage({name: 'host', id: message.id})}, 5000)
      dispatch(actions.setName('host'))
    }
    if(!isHost && message){
      dispatch(actions.setHostMessage(message))
    }
  },[message])

  const [hostOpen, setHostOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)

  const handleHost = useCallback(() => {
    setIsHost(true)
    const myId = getMyId()
    if (myId){
    dispatch(actions.setHost(myId))
    setHostOpen(true)
    }
  }, [])
  
  const handleUser = useCallback(() => {
    setUserOpen(true)
    setIsHost(false)
  }, [])
  
  const closeModals = useCallback(() => {
    setUserOpen(false)
    setHostOpen(false)
  }, [])

  const handleSearch = useCallback((id: string, name: string) => {
    const myId = getMyId()
    connectToPeer(id)
    dispatch(actions.setHost(id))
    if(myId) setTimeout(()=>{sendMessage({name, id: myId})}, 10000)
    dispatch(actions.setName(name))
    setUserOpen(false)
  }, [])

  return (<>
    <Header 
      icon={logo} 
      classNameText={styles.text} 
      buttons={[{id:1, onClick:handleUser, text:'Подключиться'},
                {id:2, onClick:handleHost, text:'Хостинг'}]
              }
      >
        Добро пожаловать
    </Header>
    {isHost && connected[0]?.name}
    {!isHost && hostMessage?.name}
    <CardBacground/>
    <CustomModal open={hostOpen} handleClose={closeModals} text={`Ключ подключения ${hostId}`} classNameText={styles.modalText}/>
    <CustomModal open={userOpen} handleClose={closeModals}>
      <SearchInput
        lable='Введите ключ хоста'
        lable2='Введите имя'
        lableWidth={150}
        lableWidth2={100}
        buttonText='Подключиться'
        handleSearch={handleSearch}
        classNameLable={styles.modalText}
        classNameButton={styles.modalText}
      />
    </CustomModal>
    </>
  );
}

export default MainPage;