import React, { ReactElement, useCallback, useState } from 'react';
import Header from './components/Header';
import headLogo from './assets/png/icon.png'

import styles from './App.module.css'
import CustomModal from './components/CustomModal';
import SearchInput from './components/SearchInput';

const logo = (className: string):ReactElement =>{
  return(
    <img className={className} src={headLogo} alt='none logo'/>
  )
}

function App() {

  const [hostOpen, setHostOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)

  const handleHost = useCallback(() => {
    setHostOpen(true)
  }, [])
  const handleUser = useCallback(() => {
    setUserOpen(true)
  }, [])
  const closeModals = useCallback(() => {
    setUserOpen(false)
    setHostOpen(false)
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
    <CustomModal open={hostOpen} handleClose={closeModals} text='Ключ подключения' classNameText={styles.modalText}/>
    <CustomModal open={userOpen} handleClose={closeModals}>
      <SearchInput
        lable='Введите ключ хоста'
        lable2='Введите имя'
        lableWidth={150}
        lableWidth2={100}
        buttonText='Подключиться'
        handleSearch={()=>{}}
        classNameLable={styles.modalText}
        classNameButton={styles.modalText}
      />
    </CustomModal>
    </>
  );
}

export default App;
