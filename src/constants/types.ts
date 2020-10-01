import { AnyNsRecord } from "dns"


export enum CardTypes {
  STANDART = "STANDART",
  BOMB = "BOMB",
  DEFUSE = "DEFUSE",
  CAT ="CAT"
}

export type Message = {
    id: string
    name: string
  }
export type Card = {
  type: CardTypes
  name:string
  icon: any
  color: string
  images: Array<{
    text?: string
    image: any
  }>
}