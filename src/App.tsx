import React, { ReactElement } from 'react';
import Header from './components/Header';
import headLogo from './assets/png/icon.png'

import styles from './App.module.css'

const logo = (className: string):ReactElement =>{
  return(
    <img className={className} src={headLogo} alt='none logo'/>
  )
}

function App() {
  return (
    <Header icon={logo} classNameText={styles.text}>Добро пожаловать</Header>
  );
}

export default App;
