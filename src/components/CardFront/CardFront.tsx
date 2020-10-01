import { Typography } from '@material-ui/core'
import React from 'react'
import { Card, CardTypes } from '../../constants/types'
import styles from './CardFront.module.css'

export type CardFrontProps ={
    card: Card,
    index: number
}

const CardFront: React.FC<CardFrontProps> = ({card, index}): React.ReactElement =>{
    return(
        <div className = {card.type === CardTypes.BOMB? styles.bomb: styles.card}>
            <div className = {styles.border} style={{borderColor: card.color}}>
                <div className = {styles.head}>
                    {card.type=== CardTypes.BOMB ?
                        <div className={styles.bombIcon}>
                            <img className={styles.bombImage} src={card.icon} alt='none icon'/>
                        </div>: 
                    <img className={styles.icon} src={card.icon} alt='none icon'/>
                    }
                    <Typography variant="h6" noWrap className={card.type === CardTypes.BOMB? styles.bombText:styles.nameText} >
                     {card.name}
                    </Typography>
                    <Typography variant="h6"  className={styles.text} >
                     {card.images[index].text}
                    </Typography>
                </div>
                <div className={styles.imageWraper}>
                    <img className={styles.image} src={card.images[index].image} alt='none image'/>
                </div>
                <div className = {styles.footer}>
                {card.type=== CardTypes.BOMB ?
                        <div className={styles.bombIcon}>
                            <img className={styles.bombImage} src={card.icon} alt='none icon'/>
                        </div>: 
                    <img className={styles.icon} src={card.icon} alt='none icon'/>
                    }
                    <Typography variant="h6" noWrap className={card.type === CardTypes.BOMB? styles.bombText:styles.nameText} >
                    {card.name}
                    </Typography>
                </div>
            </div>
        </div>
    )

}

export default CardFront;