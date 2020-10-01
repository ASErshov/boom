import { Typography } from '@material-ui/core'
import React from 'react'
import CatIcon from '../../assets/png/mainCat.png'
import styles from './CardBackground.module.css'

const CardBacground: React.FC<{}> = (): React.ReactElement =>{
    return(
        <div className = {styles.card}>
            <div className= {styles.gradient}>
                <img className={styles.icon} src={CatIcon} alt='none icon'/>
            </div>
            <Typography variant="h4" noWrap className={styles.gradientText} >
                Взрывные
            </Typography>
            <Typography variant="h3" noWrap className={styles.text}>
                Котята
            </Typography>
        </div>
    )

}

export default CardBacground;