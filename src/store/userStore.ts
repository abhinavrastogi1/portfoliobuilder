import { Iuser } from '@/interfaces'
import { create } from 'zustand'

const userStore = create((set) =>({
    user:null,
    setUser:(user:Iuser)=>set({user:user})
}))

export default userStore

export interface IuserStore{
    user:Iuser| null,
    setUser:(user:Iuser)=>void
}