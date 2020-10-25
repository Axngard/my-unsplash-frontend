export interface Item {
   id: number
   name: string
   status: boolean
}

export interface Action {
   type: string
   payload?: any
}
