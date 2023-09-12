export interface User {
    user: string
    createdAt: string
    posts: number
    picture: string
    details: Details
    follows: string[]
    followers: string[]
    visitors: string[]
    wall: Wall[]
  }
  
  export interface Details {
    age: number
    city: string
  }
  
  export interface Wall {
    user: string
    content: string
    createdAt: string
    picture: string
  }
  