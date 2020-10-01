import { Card, CardTypes } from './types';
import attackIcon from '../assets/png/cardIcons/attackIcon.png'
import beardCatIcon from '../assets/png/cardIcons/beardCatIcon.png'
import bombIcon from '../assets/png/cardIcons/bombIcon.png'
import defuseIcon from '../assets/png/cardIcons/defuseIcon.png'
import favorIcon from '../assets/png/cardIcons/favorIcon.png'
import mixIcon from '../assets/png/cardIcons/mixIcon.png'
import noIcon from '../assets/png/cardIcons/noIcon.png'
import potatoCatIcon from '../assets/png/cardIcons/potatoCatIcon.png'
import rainbowCatIcon from '../assets/png/cardIcons/rainbowCatIcon.png'
import seeIcon from '../assets/png/cardIcons/seeIcon.png'
import skipIcon from '../assets/png/cardIcons/skipIcon.png'
import tacoCatIcon from '../assets/png/cardIcons/tacoCatIcon.png'
import watermelonCatIcon from '../assets/png/cardIcons/watermelonCatIcon.png'

import attack1 from '../assets/png/cardImages/attack/1.PNG'
import attack2 from '../assets/png/cardImages/attack/2.PNG'
import attack3 from '../assets/png/cardImages/attack/3.PNG'
import attack4 from '../assets/png/cardImages/attack/4.PNG'

import no1 from '../assets/png/cardImages/no/1.PNG'
import no2 from '../assets/png/cardImages/no/2.PNG'
import no3 from '../assets/png/cardImages/no/3.PNG'
import no4 from '../assets/png/cardImages/no/4.PNG'
import no5 from '../assets/png/cardImages/no/5.PNG'

import favor1 from '../assets/png/cardImages/favor/1.PNG'
import favor2 from '../assets/png/cardImages/favor/2.PNG'
import favor3 from '../assets/png/cardImages/favor/3.PNG'
import favor4 from '../assets/png/cardImages/favor/4.PNG'

import see1 from '../assets/png/cardImages/see/1.PNG'
import see2 from '../assets/png/cardImages/see/2.PNG'
import see3 from '../assets/png/cardImages/see/3.PNG'
import see4 from '../assets/png/cardImages/see/4.PNG'
import see5 from '../assets/png/cardImages/see/5.PNG'

import skip1 from '../assets/png/cardImages/skip/1.PNG'
import skip2 from '../assets/png/cardImages/skip/2.PNG'
import skip3 from '../assets/png/cardImages/skip/3.PNG'
import skip4 from '../assets/png/cardImages/skip/4.PNG'

import mix1 from '../assets/png/cardImages/mix/1.PNG'
import mix2 from '../assets/png/cardImages/mix/2.PNG'
import mix3 from '../assets/png/cardImages/mix/3.PNG'
import mix4 from '../assets/png/cardImages/mix/4.PNG'

import bomb1 from '../assets/png/cardImages/bomb/1.PNG'
import bomb2 from '../assets/png/cardImages/bomb/2.PNG'
import bomb3 from '../assets/png/cardImages/bomb/3.PNG'
import bomb4 from '../assets/png/cardImages/bomb/4.PNG'

import defuse1 from '../assets/png/cardImages/defuse/1.PNG'
import defuse2 from '../assets/png/cardImages/defuse/2.PNG'
import defuse3 from '../assets/png/cardImages/defuse/3.PNG'
import defuse4 from '../assets/png/cardImages/defuse/4.PNG'
import defuse5 from '../assets/png/cardImages/defuse/5.PNG'
import defuse6 from '../assets/png/cardImages/defuse/6.PNG'

import beard from '../assets/png/cardImages/beard.PNG'
import potato from '../assets/png/cardImages/potato.PNG'
import rainbow from '../assets/png/cardImages/rainbow.PNG'
import taco from '../assets/png/cardImages/taco.PNG'
import watermelon from '../assets/png/cardImages/watermelon.PNG'





export const cards: Card[] = [
    {
        type: CardTypes.STANDART,
        name: 'Атаковать',
        icon: attackIcon,
        color: '#FF9900',
        images: [
            {
                text: "Распусти вековые волосы на спине",
                image: attack1
            },
            {
                text: "Выстрели из крабопульты",
                image: attack2
            },
            {
                text: "Выпусти психокотэ",
                image: attack3
            },
            {
                text: "Разбуди медведактеля",
                image: attack4
            },
        ]
    },
    {
        type: CardTypes.STANDART,
        name: 'Нетушки!',
        icon: noIcon,
        color: '#990000',
        images: [
            {
                text: "Ниндзя сносит пинком дракона",
                image: no1
            },
            {
                text: "Заткни оппонента безвкусным бутером с порцией никакущего соуса",
                image: no2
            },
            {
                text: "Вручи шнобелевскую премию",
                image: no3
            },
            {
                text: "Онотоле знает все",
                image: no4
            },
            {
                text: "Оленезаяц несудьбы врывается в комнату",
                image: no5
            },
        ]
    },
    {
        type: CardTypes.STANDART,
        name: 'Одолжение',
        icon: favorIcon,
        color: 'black',
        images: [
            {
                text: "Просит натереть тебе спинку шампунем для спинных волос",
                image: favor1
            },
            {
                text: "Тройничок на юрадояхте",
                image: favor2
            },
            {
                text: "Будь рабом на белкопати!",
                image: favor3
            },
            {
                text: "Размажь арахисовое масло на пупке и заведи новых друзей",
                image: favor4
            },
        ]
    },
    {
        type: CardTypes.STANDART,
        name: 'Заглянуть в будущее',
        icon: seeIcon,
        color: '#FF3399',
        images: [
            {
                text: "Спроси вангующую козу",
                image: see1
            },
            {
                text: "Призови креветкобогомола",
                image: see2
            },
            {
                text: "Проведи секретное проникновение спецкроликами",
                image: see3
            },
            {
                text: "Вкуси тортилию из единорога и получи ее силу",
                image: see4
            },
            {
                text: "Почеши пузо свинорогу",
                image: see5
            },
        ]
    },
    {
        type: CardTypes.STANDART,
        name: 'Пропустить',
        icon: skipIcon,
        color: '#0099FF', 
        images: [
            {
                text: "Свинти сверкая леопардовой задницей",
                image: skip1
            },
            {
                text: "Оседлай космическую гиперкозу",
                image: skip2
            },
            {
                text: "Псст! ты - краб под прикрытием",
                image: skip3
            },
            {
                text: "Угони заяраптора",
                image: skip4
            },
        ]
    },
    {
        type: CardTypes.STANDART,
        name: 'Перемешать',
        icon: mixIcon,
        color: '#CC9966',
        images: [
            {
                text: "Приперлась стая пердучих мышей",
                image: mix1
            },
            {
                text: "Абракраб линкольн избранный президент",
                image: mix2
            },
            {
                text: "Электрошторм помиранских шпицев нагрянул с востока",
                image: mix3
            },
            {
                text: "Межпространственный лоток",
                image: mix4
            },
        ]
    },
    {
        type: CardTypes.BOMB,
        name: 'Взрывной котенок',
        icon: bombIcon,
        color: 'black',
        images: [
            {
                image: bomb1
            },
            {
                image: bomb2
            },
            {
                image: bomb3
            },
            {
                image: bomb4
            },
        ]
    },
    {
        type: CardTypes.DEFUSE,
        name: 'Обезвредить',
        icon: defuseIcon,
        color: '#99FF00',
        images: [
            {
                text: 'Используй лазерную указку',
                image: defuse1
            },
            {
                text: 'Поглать кота сука',
                image: defuse2
            },
            {
                text: 'Отправь на терапию к психологу',
                image: defuse3
            },
            {
                text: 'Вытерпи утренние газы',
                image: defuse4
            },
            {
                text: 'Займись кошачьей йогой',
                image: defuse5
            },
            {
                text: 'Накорми бутербродом с кошачьей мятой',
                image: defuse6
            },
        ]
    },
    {
        type: CardTypes.CAT,
        name: 'Брадокот',
        icon: beardCatIcon,
        color: 'black',
        images: [
            {
                image: beard
            },
        ]
    },
    {
        type: CardTypes.CAT,
        name: 'Такокот',
        icon: tacoCatIcon,
        color: 'black',
        images: [
            {
                image: taco
            },
        ]
    },
    {
        type: CardTypes.CAT,
        name: 'Кошка картошка',
        icon: potatoCatIcon,
        color: 'black',
        images: [
            {
                image: potato
            },
        ]
    },
    {
        type: CardTypes.CAT,
        name: 'Блюющий радугой кот',
        icon: rainbowCatIcon,
        color: 'black',
        images: [
            {
                image: rainbow
            },
        ]
    },
    {
        type: CardTypes.CAT,
        name: 'Арбузный котэ',
        icon: watermelonCatIcon,
        color: 'black',
        images: [
            {
                image: watermelon
            },
        ]
    },
]